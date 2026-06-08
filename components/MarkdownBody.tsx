function inlineFormat(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }

    const markdownLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (markdownLink) {
      return (
        <a
          key={i}
          href={markdownLink[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
        >
          {markdownLink[1]}
        </a>
      );
    }

    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900 break-words"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

function renderTable(block: string, key: number) {
  const rows = block
    .trim()
    .split("\n")
    .map((row) =>
      row
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim())
    );

  const header = rows[0];
  const body = rows.slice(2);

  return (
    <div key={key} className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="min-w-full border-collapse bg-white text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            {header.map((cell, i) => (
              <th key={i} className="border-b border-slate-200 px-5 py-4 font-semibold text-slate-900">
                {inlineFormat(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i} className="border-b border-slate-100">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-4 align-top text-slate-700">
                  {inlineFormat(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MarkdownBody({ content }: { content: string }) {
  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const t = block.trim();
        if (!t) return null;

        const imageMatch = t.match(/^!\[(.*?)\]\((.*?)\)$/);

        if (imageMatch) {
          return (
            <figure key={i} className="my-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src={imageMatch[2]}
                alt={imageMatch[1]}
                className="h-auto w-full"
              />
              {imageMatch[1] ? (
                <figcaption className="px-5 py-3 text-sm text-slate-500">
                  {imageMatch[1]}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (t.includes("|") && t.includes("---")) {
          return renderTable(t, i);
        }

        if (t.startsWith("### ")) {
          return (
            <h3 key={i} className="text-2xl font-semibold tracking-tight text-slate-950">
              {inlineFormat(t.replace(/^### /, ""))}
            </h3>
          );
        }

        if (t.startsWith("## ")) {
          return (
            <h2 key={i} className="text-3xl font-semibold tracking-tight text-slate-950">
              {inlineFormat(t.replace(/^## /, ""))}
            </h2>
          );
        }

        if (t.startsWith("# ")) {
          return (
            <h1 key={i} className="text-4xl font-bold tracking-tight text-slate-950">
              {inlineFormat(t.replace(/^# /, ""))}
            </h1>
          );
        }

        if (t.startsWith("- ")) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 text-slate-700">
              {t.split("\n").map((x, j) => (
                <li key={j}>{inlineFormat(x.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="leading-8 text-slate-700">
            {inlineFormat(t)}
          </p>
        );
      })}
    </div>
  );
}
