import { useEffect, useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { SALES_BUTTON_TEXT, SALES_URL } from '../../config';
import {
  LIGHT_RESULT_COPY,
  QuizResultSummary,
  ROSE_TEXTS,
  buildSalesUrl,
} from '../data/quizData';
import { RoseAvatar } from './RoseAvatar';

interface ResultScreenProps {
  result: QuizResultSummary;
  onReset: () => void;
}

export function ResultScreen({ result, onReset }: ResultScreenProps) {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const salesHref = buildSalesUrl(SALES_URL);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainTitle = result.isLight
    ? LIGHT_RESULT_COPY.title
    : result.primaryWeight.name;
  const mainDescription = result.isLight
    ? LIGHT_RESULT_COPY.description
    : result.primaryWeight.description;
  const firstStepText = result.isLight
    ? LIGHT_RESULT_COPY.firstStep
    : result.primaryWeight.firstStep;

  return (
    <div className="animate-screen-enter flex flex-col gap-4 pb-24 md:pb-8">
      <section className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3.5">
          <RoseAvatar size={48} eager withGreenBorder />
          <p className="text-[15px] font-semibold text-[var(--brand-terracotta-text)]">
            O peso que mais pesa em você hoje
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <h1 className="font-display font-bold text-[28px] sm:text-[32px] leading-[1.2] text-[var(--brand-green-heading)]">
            {mainTitle}
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-primary)]">
            {mainDescription}
          </p>
        </div>

        {!result.isLight && result.tiedCount >= 2 && (
          <p className="text-[15px] leading-[1.55] text-[var(--text-secondary)] pt-2 border-t border-[var(--border-soft)]">
            Você empatou em {result.tiedCount} pesos. Comece pelo primeiro e siga para o outro quando sentir alívio.
          </p>
        )}
      </section>

      <section
        aria-label="Distribuição dos 4 pesos"
        className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] p-6 flex flex-col gap-4"
      >
        <h2 className="font-display font-semibold text-[20px] leading-[1.3] text-[var(--text-primary)]">
          Os 4 pesos no seu dia a dia
        </h2>

        <div className="flex flex-col gap-3.5">
          {result.scores.map((item) => {
            const isPrimaryBar =
              !result.isLight && item.id === result.primaryWeight.id;

            return (
              <div key={item.id} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className={`text-[16px] ${
                      isPrimaryBar
                        ? 'font-semibold text-[var(--brand-terracotta-text)]'
                        : 'font-medium text-[var(--text-primary)]'
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-[15px] font-semibold tabular-nums ${
                      isPrimaryBar
                        ? 'text-[var(--brand-terracotta-text)]'
                        : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {item.percentage}%
                  </span>
                </div>

                <div
                  role="img"
                  aria-label={`${item.name}: ${item.percentage}%`}
                  className="w-full h-3 rounded-full bg-[var(--track-bg)] overflow-hidden"
                >
                  <div
                    className={`animate-bar-grow h-full rounded-full ${
                      isPrimaryBar
                        ? 'bg-[var(--brand-terracotta)]'
                        : 'bg-[var(--brand-green)]'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] p-6 flex flex-col gap-2.5">
        <h2 className="font-display font-semibold text-[20px] leading-[1.3] text-[var(--brand-green-heading)]">
          Seu primeiro passo esta semana
        </h2>
        <p className="text-[17px] leading-[1.6] text-[var(--text-primary)]">
          {firstStepText}
        </p>
      </section>

      <section className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-display font-bold text-[24px] leading-[1.25] text-[var(--brand-green-heading)]">
            Dá para dividir esse peso
          </h2>
          <p className="text-[17px] leading-[1.6] text-[var(--text-primary)]">
            Você viu o primeiro passo. O Kit Os 4 Pesos do Cuidado leva você do passo à família dividindo de verdade: o guia para conversar sem brigar, o painel de gastos, mensagens prontas para pedir ajuda e a agenda da semana.
          </p>
        </div>

        <a
          href={salesHref}
          className="animate-cta-pulse w-full min-h-[56px] px-6 py-3.5 rounded-[14px] bg-[#E8590C] hover:bg-[#D9520A] active:bg-[#C94A08] active:animate-none active:scale-[0.99] text-white font-semibold text-[17px] inline-flex items-center justify-center gap-2.5 transition-colors duration-150 shadow-[0_6px_16px_rgba(232,89,12,0.35)] no-underline"
        >
          <span>{SALES_BUTTON_TEXT}</span>
          <ArrowRight className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
        </a>

        <div className="flex items-center gap-3 pt-1">
          <RoseAvatar size={40} />
          <p className="text-[15px] leading-[1.5] text-[var(--text-secondary)]">
            {ROSE_TEXTS.resultCtaBubble}
          </p>
        </div>
      </section>

      <div className="flex justify-center pt-1">
        <button
          type="button"
          onClick={onReset}
          className="min-h-[48px] px-5 py-2.5 rounded-[14px] text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-soft)] active:scale-[0.98] inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
          <span>Refazer o mapa</span>
        </button>
      </div>

      {showStickyCta && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-page)]/95 backdrop-blur-sm border-t border-[var(--border-soft)] shadow-[var(--shadow-sticky)] px-4 py-2.5">
          <div className="max-w-[600px] mx-auto">
            <a
              href={salesHref}
              className="animate-cta-pulse w-full min-h-[56px] px-6 py-3 rounded-[14px] bg-[#E8590C] hover:bg-[#D9520A] active:bg-[#C94A08] active:animate-none active:scale-[0.99] text-white font-semibold text-[17px] inline-flex items-center justify-center gap-2.5 transition-colors duration-150 shadow-[0_6px_16px_rgba(232,89,12,0.35)] no-underline"
            >
              <span>{SALES_BUTTON_TEXT}</span>
              <ArrowRight className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
