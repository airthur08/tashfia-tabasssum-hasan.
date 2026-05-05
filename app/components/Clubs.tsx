import RevealOnScroll from "./RevealOnScroll";

const contributions = [
  {
    title: "Organiser, Entrepret 2025",
    blurb: "Entrepreneurial Business Case Competition",
  },
  {
    title: "Affiliations In-Charge & Organiser, Master's of Ideation 2025",
    blurb: "Strategy-based business case competition",
  },
  {
    title: "Organiser, Ad Maker Bangladesh 2025",
    blurb: "National-level 360° marketing competition",
  },
  {
    title: "Operations & Administration",
    blurb: "Managed core operational and administrative tasks",
  },
  {
    title: "F&B Partnerships",
    blurb: "Onboarded partners: Treat Me, Jibon, Quick Bite, AMA Coffee",
  },
];

export default function Clubs() {
  return (
    <RevealOnScroll
      id="clubs"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2
        className="font-serif-display text-4xl"
        style={{ color: "#000000" }}
      >
        NSU YES! — Young Entrepreneurs Society
      </h2>
      <p
        className="mt-4 max-w-3xl leading-relaxed"
        style={{ color: "#6F6F6F" }}
      >
        Senior Member of NSU&apos;s premium business club (est. 1994). Dedicated
        to entrepreneurial mindset and ethical leadership through national-level
        events.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {contributions.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-[#E0E0E0] p-6 transition-colors hover:border-black"
          >
            <h3 className="font-semibold" style={{ color: "#000000" }}>
              {c.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6F6F6F" }}>
              {c.blurb}
            </p>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
