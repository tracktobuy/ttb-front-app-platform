import Image from "next/image";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export default function Logo({ className = "", withWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/ttb-logo.png"
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
        aria-hidden="true"
      />
      {withWordmark && (
        <span className="font-[family-name:var(--font-display)] text-[17px] font-semibold tracking-tight text-primary">
          Track<span className="text-accent">To</span>Buy
        </span>
      )}
    </div>
  );
}
