type IconProps = {
  className?: string;
};

const base = "h-4 w-4 fill-current";

export function FacebookIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M14 8.5h2.5V5.8c-.4-.1-1.5-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6V13H6.5v3.2H9.3V22h3.3v-5.8h2.7l.4-3.2h-3.1v-2.2c0-.9.3-1.5 1.4-1.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Z" />
      <path d="M17.5 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
      <path d="M12 3.5c-2.4 0-2.7 0-3.6.1a5.2 5.2 0 0 0-3.8 3.8c-.1.9-.1 1.2-.1 3.6s0 2.7.1 3.6a5.2 5.2 0 0 0 3.8 3.8c.9.1 1.2.1 3.6.1s2.7 0 3.6-.1a5.2 5.2 0 0 0 3.8-3.8c.1-.9.1-1.2.1-3.6s0-2.7-.1-3.6a5.2 5.2 0 0 0-3.8-3.8c-.9-.1-1.2-.1-3.6-.1Zm0 1.5c2.3 0 2.6 0 3.5.1a3.7 3.7 0 0 1 2.7 2.7c.1.9.1 1.2.1 3.5s0 2.6-.1 3.5a3.7 3.7 0 0 1-2.7 2.7c-.9.1-1.2.1-3.5.1s-2.6 0-3.5-.1a3.7 3.7 0 0 1-2.7-2.7c-.1-.9-.1-1.2-.1-3.5s0-2.6.1-3.5a3.7 3.7 0 0 1 2.7-2.7c.9-.1 1.2-.1 3.5-.1Z" />
    </svg>
  );
}

export function TikTokIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M18.5 7.4a5.4 5.4 0 0 1-3.2-1.1v7.2a5.1 5.1 0 1 1-4.4-5v2.5a2.6 2.6 0 1 0 1.9 2.5V3.5h2.5a5.4 5.4 0 0 0 3.2 3.1v.8Z" />
    </svg>
  );
}

export function LocationIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M12 2.8a6.7 6.7 0 0 0-6.7 6.7c0 4.5 5.4 10.7 6.2 11.6a.7.7 0 0 0 1 0c.8-.9 6.2-7.1 6.2-11.6A6.7 6.7 0 0 0 12 2.8Zm0 9.3a2.6 2.6 0 1 1 2.6-2.6A2.6 2.6 0 0 1 12 12.1Z" />
    </svg>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M7.2 3.5h2.1c.4 0 .8.3.9.7l.8 2.4c.1.4 0 .8-.3 1.1L9.4 9.3a11.4 11.4 0 0 0 5.3 5.3l1.6-1.3c.3-.3.7-.4 1.1-.3l2.4.8c.4.1.7.5.7.9v2.1c0 .5-.4.9-.9.9A14.6 14.6 0 0 1 6.3 4.4c0-.5.4-.9.9-.9Z" />
    </svg>
  );
}
