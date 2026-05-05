import RevealOnScroll from "./RevealOnScroll";

const schools = [
  {
    institution: "North South University",
    program: "Bachelor of Business Administration (BBA)",
    note: "Currently Pursuing",
  },
  {
    institution: "Adamjee Cantonment College",
    program: "HSC, Science",
    note: "Completed",
  },
  {
    institution: "Shaheed Bir Uttam Lt Anwar Girls' College",
    program: "SSC, Science",
    note: "Completed",
  },
];

export default function Education() {
  return (
    <RevealOnScroll
      id="education"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2
        className="font-serif-display text-4xl mb-12"
        style={{ color: "#000000" }}
      >
        Education
      </h2>

      <div className="space-y-6">
        {schools.map((s) => (
          <div
            key={s.institution}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#E0E0E0] pb-6"
          >
            <div>
              <h3
                className="font-semibold text-lg"
                style={{ color: "#000000" }}
              >
                {s.institution}
              </h3>
              <p className="mt-1" style={{ color: "#6F6F6F" }}>
                {s.program}
              </p>
            </div>
            <span className="text-sm" style={{ color: "#6F6F6F" }}>
              {s.note}
            </span>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
