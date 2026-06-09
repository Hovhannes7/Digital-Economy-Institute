export function AuthorBio({ name }: { name: string }) {
  const isHovhannes = name === "Hovhannes Adajyan";

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-subtle">
      <p className="text-xs font-bold uppercase tracking-[.22em] text-steel">
        About the author
      </p>

      <h3 className="mt-3 text-xl font-bold text-ink">{name}</h3>

      {isHovhannes ? (
        <>
          <p className="mt-4 text-sm leading-7 text-steel">
            Hovhannes Adajyan is the founder of the Institute of Digital
            Economy and a public-sector specialist focused on digital
            transformation, innovation policy, and technology ecosystem
            development.
          </p>

          <p className="mt-4 text-sm leading-7 text-steel">
            His areas of interest include digital economy measurement,
            agritech, SME digitalization, public-sector innovation,
            responsible AI, and practical AI applications for economic and
            social development.
          </p>

          <p className="mt-4 text-xs leading-6 text-steel">
            Disclosure: Publications reflect the author’s independent research
            and policy analysis unless otherwise stated.
          </p>
        </>
      ) : (
        <p className="mt-4 text-sm leading-7 text-steel">
          Author biography will be added after verification.
        </p>
      )}
    </div>
  );
}
