import Image from "next/image";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export default function Logo({ className = "", withWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/ttb04.svg"
        alt=""
        width={200}
        height={200}
        aria-hidden="true"
      />
    </div>
  );
}
