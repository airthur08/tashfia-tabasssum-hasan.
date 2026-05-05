import RevealOnScroll from "./RevealOnScroll";

const roles = [
  {
    title: "Executive Associate",
    org: "Paper Rhyme Advertising Limited",
    duration: "Jan 2026 – Present",
    description:
      "Driving strategic partnerships and supporting executive operations across creative campaigns and client engagements.",
  },
  {
    title: "Outreach Specialist",
    org: "NINE",
    duration: "Currently Active",
    description:
      "Leading outreach initiatives, growing community footprint, and building partner pipelines.",
  },
  {
    title: "Business Representative",
    org: "North South University",
    duration: "Ongoing",
    description:
      "Representing the university across business engagements and student-led commercial initiatives.",
  },
  {
    title: "Event Volunteer",
    org: "Naveed's Comedy Club, Gulshan 2",
    duration: "Volunteer",
    description:
      "Coordinated guest experience, crowd flow, and live event operations.",
  },
  {
    title: "Education Expo Volunteer",
    org: "Hotel Sarina, Banani",
    duration: "Volunteer",
    description:
      "Supported booth operations, registrations, and visitor guidance during the expo.",
  },
];

export default function Experience() {
  return (
    <RevealOnScroll
      id="experience"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2
        className="font-serif-display text-4xl mb-12"
        style={{ color: "#000000" }}
      >
        Experience
      </h2>

      <ol className="relative border-l border-[#E0E0E0] pl-8 space-y-10">
        {roles.map((r) => (
          <li key={`${r.title}-${r.org}`} className="relative">
            <span
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-black"
              aria-hidden
            />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-lg" style={{ color: "#000000" }}>
                {r.title}
              </h3>
              <span className="text-sm" style={{ color: "#6F6F6F" }}>
                {r.duration}
              </span>
            </div>
            <p className="mt-1" style={{ color: "#6F6F6F" }}>
              {r.org}
            </p>
            <p className="mt-3 leading-relaxed" style={{ color: "#6F6F6F" }}>
              {r.description}
            </p>
          </li>
        ))}
      </ol>
    </RevealOnScroll>
  );
}
