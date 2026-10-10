interface TeamAvatarProps {
  name: string;
  avatar: string;
  initials: string;
  /** Tailwind size classes, e.g. "w-24 h-24". */
  sizeClass?: string;
}

/** Photo when one exists, otherwise a monogram. Server-renderable. */
export function TeamAvatar({ name, avatar, initials, sizeClass = 'w-24 h-24' }: TeamAvatarProps) {
  if (avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={avatar}
        alt={name}
        className={`${sizeClass} rounded-2xl object-cover shadow-[0_16px_48px_rgba(37,99,235,0.30)]`}
      />
    );
  }
  return (
    <div
      className={`${sizeClass} rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-[0_16px_48px_rgba(37,99,235,0.30)]`}
      role="img"
      aria-label={name}
    >
      <span
        className="text-3xl font-bold text-white tracking-tight"
        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
      >
        {initials}
      </span>
    </div>
  );
}
