import Image from "next/image";

const explore = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Clubs", href: "#clubs" },
  { label: "Skills", href: "#skills" },
];

const about = [
  { label: "Home", href: "#home" },
  { label: "Contact", href: "#contact" },
];

const connect = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tashfia-tabassum-h-1167352b0",
    external: true,
  },
];

type LinkColumnProps = {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
};

function LinkColumn({ title, items }: LinkColumnProps) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-white font-medium mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      <Image
        src="/images/footer-tta-mobile.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover md:hidden"
        aria-hidden
      />
      <Image
        src="/images/footer-tta-desktop.png"
        alt=""
        fill
        sizes="100vw"
        className="hidden object-cover md:block"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 md:bg-gradient-to-r md:from-black/80 md:via-black/35 md:to-black/15"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="w-full rounded-[28px] border border-white/20 bg-black/25 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-5">
              <a href="#home" className="flex items-center gap-4">
                <Image
                  src="/images/tta-avatar.png"
                  alt="Portrait illustration of Tashfia Tabassum Hasan"
                  width={52}
                  height={52}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="font-serif-display text-2xl tracking-tight text-white">
                  Tashfia Tabassum Hasan
                </span>
              </a>

              <p className="text-sm leading-relaxed text-white/75 max-w-sm mt-6">
                BBA student at North South University and Executive Associate
                at Paper Rhyme Advertising. Strategic partnerships,
                national-level event organizing, and outreach — building
                real-world impact one project at a time.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <LinkColumn title="Explore" items={explore} />
              <LinkColumn title="About" items={about} />
              <LinkColumn title="Connect" items={connect} />
            </div>
          </div>

          <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-[10px] uppercase tracking-widest text-white/70">
              © 2026 Tashfia Tabassum Hasan · Dhaka, Bangladesh
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-widest text-white/70">
                Connect:
              </span>
              <a
                href="https://www.linkedin.com/in/tashfia-tabassum-h-1167352b0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/75 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
