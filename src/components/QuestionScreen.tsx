import { ArrowLeft, Check } from 'lucide-react';
import {
  ANSWER_OPTIONS,
  QUESTIONS,
  getComfortPhrase,
} from '../data/quizData';
import { RoseAvatar } from './RoseAvatar';

interface QuestionScreenProps {
  questionIndex: number;
  selectedValue: number | null;
  isTransitioning: boolean;
  onSelectAnswer: (points: 2 | 1 | 0) => void;
  onBack: () => void;
}

export function QuestionScreen({
  questionIndex,
  selectedValue,
  isTransitioning,
  onSelectAnswer,
  onBack,
}: QuestionScreenProps) {
  const question = QUESTIONS[questionIndex];
  const total = QUESTIONS.length;
  const currentNumber = questionIndex + 1;
  const progressPercent = (currentNumber / total) * 100;
  const comfortPhrase = getComfortPhrase(questionIndex);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between min-h-[44px]">
          {questionIndex > 0 ? (
            <button
              type="button"
              onClick={onBack}
              disabled={isTransitioning}
              className="min-h-[44px] -ml-2 px-3 py-2 rounded-[14px] text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-soft)] active:scale-[0.98] inline-flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              <span>Voltar</span>
            </button>
          ) : (
            <span className="text-[15px] font-medium text-[var(--text-secondary)]">
              Mapa dos 4 Pesos
            </span>
          )}

          <p className="text-[15px] font-medium text-[var(--text-secondary)] tabular-nums">
            Pergunta {currentNumber} de {total}
          </p>
        </div>

        <div
          role="progressbar"
          aria-label="Progresso do questionário"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={currentNumber}
          className="w-full h-2.5 rounded-full bg-[var(--track-bg)] overflow-hidden"
        >
          <div
            className="h-full rounded-full bg-[var(--brand-terracotta)] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div
        key={question.id}
        className="animate-screen-enter rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] p-6 sm:p-7 flex flex-col gap-6"
      >
        <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-soft)]">
          <RoseAvatar size={40} />
          <p className="text-[15px] leading-[1.45] text-[var(--text-secondary)]">
            {comfortPhrase}
          </p>
        </div>

        <div aria-live="polite" className="flex flex-col gap-2.5">
          <p className="text-[15px] font-semibold text-[var(--brand-terracotta-text)]">
            {question.weightLabel}
          </p>
          <h2 className="font-display font-semibold text-[23px] sm:text-[26px] leading-[1.32] text-[var(--text-primary)]">
            {question.text}
          </h2>
        </div>

        <div
          role="radiogroup"
          aria-label={question.text}
          className="flex flex-col gap-3 pt-1"
        >
          {ANSWER_OPTIONS.map((option) => {
            const isSelected = selectedValue === option.points;

            return (
              <button
                key={option.points}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={isTransitioning}
                onClick={() => onSelectAnswer(option.points)}
                className={`w-full min-h-[56px] px-5 py-3.5 rounded-[14px] border text-left text-[17px] font-medium flex items-center justify-between gap-3 transition-all duration-150 cursor-pointer active:scale-[0.99] ${
                  isSelected
                    ? 'bg-[var(--brand-green-soft)] border-[var(--brand-green)] text-[var(--brand-green-heading)] ring-1 ring-[var(--brand-green)]'
                    : 'bg-[var(--bg-card)] border-[var(--border-soft)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] hover:border-[var(--brand-green)]'
                }`}
              >
                <span>{option.label}</span>
                <span
                  aria-hidden="true"
                  className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center border transition-colors ${
                    isSelected
                      ? 'bg-[var(--brand-green)] border-[var(--brand-green)] text-white'
                      : 'border-[var(--border-soft)] bg-transparent'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={2.5} />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
