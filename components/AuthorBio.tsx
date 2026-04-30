export function AuthorBio({ name }: { name: string }) {
  return <div className="rounded-2xl border border-line bg-paper p-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-steel">Author</p><h3 className="mt-3 text-xl font-bold">{name}</h3><p className="mt-3 text-sm leading-6 text-steel">Professional placeholder biography for this MVP. Add verified affiliation, disclosure information, and contact details before public launch.</p></div>;
}
