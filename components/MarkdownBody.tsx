function inlineFormat(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part);
}
export function MarkdownBody({ content }: { content: string }) {
  const blocks = content.split(/\n\s*\n/);
  return <div className="prose-content">{blocks.map((block, i) => {
    const t = block.trim();
    if (!t) return null;
    if (t.startsWith("### ")) return <h3 key={i}>{t.replace(/^### /,"")}</h3>;
    if (t.startsWith("## ")) return <h2 key={i}>{t.replace(/^## /,"")}</h2>;
    if (t.startsWith("- ")) return <ul key={i}>{t.split("\n").map(x => <li key={x}>{inlineFormat(x.replace(/^- /,""))}</li>)}</ul>;
    return <p key={i}>{inlineFormat(t)}</p>;
  })}</div>;
}
