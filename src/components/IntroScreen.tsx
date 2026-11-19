import { ArrowRight } from 'lucide-react';
import { ROSE_TEXTS } from '../data/quizData';
import { RoseAvatar } from './RoseAvatar';

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="animate-screen-enter flex flex-col gap-5">
      <header className="flex flex-col items-center text-center gap-3 pt-2">
        <RoseAvatar size={96} eager withGreenBorder />
        <p className="text-[15px] font-medium text-[var(--text-secondary)]">
          {ROSE_TEXTS.introCaption}
        </p>
      </header>

      <div
        className="relative rounded-[16px] bg-[var(--bg-soft)] border border-[var(--border-soft)] px-5 py-4 text-[16px] leading-[1.6] text-[var(--text-primary)]"
        aria-label="Fala da Rose"
      >
        <p>{ROSE_TEXTS.introBubble}</p>
      </div>

      <section className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] p-6 sm:p-8 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="font-display font-bold text-[30px] sm:text-[34px] leading-[1.2] text-[var(--brand-green-heading)]">
            Mapa dos 4 Pesos
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-primary)]">
            Descubra qual parte do cuidado com seu pai ou sua mãe está pesando mais em você hoje e veja um primeiro passo prático para começar esta semana.
          </p>
        </div>

        <p className="text-[15px] font-medium text-[var(--text-secondary)] flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <span>12 perguntas</span>
          <span aria-hidden="true">·</span>
          <span>2 minutos</span>
          <span aria-hidden="true">·</span>
          <span>Sem escrever</span>
        </p>

        <button
          type="button"
          onClick={onStart}
          className="w-full min-h-[56px] px-6 py-3.5 rounded-[14px] bg-[var(--brand-green)] hover:bg-[var(--brand-green-hover)] active:bg-[var(--brand-green-active)] active:scale-[0.99] text-white font-semibold text-[17px] inline-flex items-center justify-center gap-2.5 transition-all duration-150 cursor-pointer shadow-sm"
        >
          <span>Começar</span>
          <ArrowRight className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
        </button>
      </section>

      <footer className="px-2 pt-1 pb-4 text-center">
        <p className="text-[15px] leading-[1.5] text-[var(--text-secondary)]">
          {ROSE_TEXTS.disclaimer}
        </p>
      </footer>
    </div>
  );
}
