import { useState } from 'react';

interface RoseAvatarProps {
  size?: 40 | 48 | 72 | 96;
  eager?: boolean;
  withGreenBorder?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<RoseAvatarProps['size']>, string> = {
  40: 'w-10 h-10 text-base',
  48: 'w-12 h-12 text-lg',
  72: 'w-[72px] h-[72px] text-xl',
  96: 'w-24 h-24 text-2xl',
};

export function RoseAvatar({
  size = 40,
  eager = false,
  withGreenBorder = false,
  className = '',
}: RoseAvatarProps) {
  const [hasError, setHasError] = useState(false);

  const borderStyle = withGreenBorder
    ? 'border-2 border-[var(--brand-green)]'
    : 'border border-[var(--border-soft)]';

  if (hasError) {
    return (
      <div
        aria-hidden="true"
        className={`${SIZE_CLASSES[size]} ${borderStyle} rounded-full shrink-0 flex items-center justify-center bg-[var(--brand-green)] text-white font-display font-semibold select-none ${className}`}
      >
        R
      </div>
    );
  }

  return (
    <img
      src="./rose.jpg"
      alt="Rose, cuida da mãe e criou o Mapa dos 4 Pesos"
      width={size}
      height={size}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${SIZE_CLASSES[size]} ${borderStyle} rounded-full shrink-0 object-cover object-[50%_26%] bg-[var(--track-bg)] ${className}`}
    />
  );
}
