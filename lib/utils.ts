export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(new Date(value));
}
