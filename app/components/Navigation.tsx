import Image from "next/image";

const menu = [
  { label: "Home", href: "#home", active: true },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Clubs", href: "#clubs" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <a
          href="#home"
          className="font-serif-display text-2xl sm:text-3xl tracking-tight text-black flex items-center gap-4"
        >
          <Image
            src="/images/tta-avatar.png"
            alt="Portrait illustration of Tashfia Tabassum Hasan"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <span>Tashfia Tabassum Hasan</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm transition-colors hover:text-black"
                style={{ color: item.active ? "#000000" : "#6F6F6F" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/tashfia-tabassum-h-1167352b0"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black text-white px-6 py-2.5 text-sm transition-transform duration-200 hover:scale-[1.03] inline-block"
        >
          Let&apos;s Connect
        </a>
      </div>
    </nav>
  );
}
