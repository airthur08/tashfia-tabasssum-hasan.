import RevealOnScroll from "./RevealOnScroll";

const skills = [
  "Affiliations",
  "Content Planning",
  "Strategic Partnerships",
  "Administrative Assistance",
  "Event Operations",
  "Crowd Control",
  "Persuasive Communication",
  "Lead Generation",
  "Operations Management",
  "Administration",
  "Outbound Marketing",
  "Management",
  "Communication",
];

export default function Skills() {
  return (
    <RevealOnScroll className="max-w-5xl mx-auto py-24 px-6">
      <h2
        className="font-serif-display text-4xl mb-10"
        style={{ color: "#000000" }}
      >
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border text-sm px-4 py-2 transition-colors hover:border-black"
            style={{ borderColor: "#E0E0E0", color: "#000000" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </RevealOnScroll>
  );
}
