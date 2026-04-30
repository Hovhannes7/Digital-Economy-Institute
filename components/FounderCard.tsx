export function FounderCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return <article className="rounded-2xl border border-line bg-white p-6 shadow-subtle"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-ink text-lg font-black">{name.split(" ").map(p=>p[0]).join("")}</div><h3 className="mt-5 text-xl font-bold">{name}</h3><p className="mt-1 text-sm font-semibold text-accent">{role}</p><p className="mt-4 text-sm leading-6 text-steel">{bio}</p></article>;
}
