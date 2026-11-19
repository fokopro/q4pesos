import { ROSE_TEXTS } from '../data/quizData';
import { RoseAvatar } from './RoseAvatar';

export function LoadingScreen() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-screen-enter rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-soft)] shadow-[var(--shadow-card)] px-6 py-14 flex flex-col items-center text-center gap-5 my-6"
    >
      <RoseAvatar size={72} eager withGreenBorder />

      <div className="flex flex-col items-center gap-4">
        <p className="font-display font-semibold text-[22px] leading-[1.35] text-[var(--brand-green-heading)]">
          {ROSE_TEXTS.loading}
        </p>

        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="loading-dot w-2.5 h-2.5 rounded-full bg-[var(--brand-terracotta)]" />
          <span className="loading-dot loading-dot-2 w-2.5 h-2.5 rounded-full bg-[var(--brand-terracotta)]" />
          <span className="loading-dot loading-dot-3 w-2.5 h-2.5 rounded-full bg-[var(--brand-terracotta)]" />
        </div>
      </div>
    </div>
  );
}
