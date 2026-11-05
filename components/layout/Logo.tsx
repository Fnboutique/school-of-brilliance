import Image from "next/image";
import Link from "next/link";

/** Official logo, shown unmodified (cropped from the supplied artwork, aspect ratio preserved). */
export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <Link href="/" aria-label="School of Brilliance – home" className="inline-flex shrink-0">
      <Image src="/images/logo-badge.png" alt="School of Brilliance logo" width={376} height={315} priority className={`${className} w-auto`} />
    </Link>
  );
}
