import Link from "next/link";

const versions = [
  { label: "V1", href: "/v1" },
  { label: "V2", href: "/v2" },
  { label: "V3", href: "/v3" },
];

export default function VersionSelectPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 text-[#15253a]">
      <nav
        aria-label="홈페이지 시안 선택"
        className="grid w-full max-w-[720px] grid-cols-3 gap-4 max-[560px]:grid-cols-1"
      >
        {versions.map((version) => (
          <Link
            className="grid min-h-40 place-items-center border border-[#d8e2e7] bg-white text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-.07em] transition hover:-translate-y-1 hover:border-[#075a9a] hover:bg-[#075a9a] hover:text-white hover:shadow-[0_16px_32px_rgba(7,90,154,.2)]"
            href={version.href}
            key={version.label}
          >
            {version.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
