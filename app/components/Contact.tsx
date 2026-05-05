import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <RevealOnScroll
      id="contact"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2
        className="font-serif-display text-4xl mb-6"
        style={{ color: "#000000" }}
      >
        Let&apos;s Connect
      </h2>

      <p className="max-w-2xl leading-relaxed" style={{ color: "#6F6F6F" }}>
        Reach out for partnerships, event collaborations, or to chat about
        entrepreneurial ideas. Based in Dhaka, Bangladesh.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <a
          href="https://www.linkedin.com/in/tashfia-tabassum-h-1167352b0"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black text-white px-6 py-3 text-sm transition-transform duration-200 hover:scale-[1.03] inline-block w-fit"
        >
          LinkedIn →
        </a>
        <span className="text-sm" style={{ color: "#6F6F6F" }}>
          linkedin.com/in/tashfia-tabassum-h-1167352b0
        </span>
      </div>

      <p className="mt-4 text-sm uppercase tracking-wide" style={{ color: "#6F6F6F" }}>
        📍 Dhaka, Bangladesh
      </p>

      <hr className="mt-16 border-[#E0E0E0]" />
      <p className="mt-6 text-sm" style={{ color: "#6F6F6F" }}>
        © 2026 Tashfia Tabassum Hasan.
      </p>
    </RevealOnScroll>
  );
}
