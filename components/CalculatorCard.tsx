import type { Calculator } from "@/lib/communities";
import { NoticeBox } from "@/components/NoticeBox";
export function CalculatorCard({ calculator }: { calculator: Calculator }) {
  const card = <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-subtle"><h3 className="text-lg font-bold">{calculator.title}</h3><p className="mt-2 text-sm leading-6 text-steel">{calculator.description}</p>{calculator.href ? <p className="mt-4 text-sm font-semibold text-accent">Open external reference →</p> : <p className="mt-4 text-sm font-semibold text-steel">Backend-ready placeholder</p>}{calculator.note ? <div className="mt-4"><NoticeBox>{calculator.note}</NoticeBox></div> : null}</div>;
  return calculator.href ? <a href={calculator.href} target="_blank" rel="noopener noreferrer" className="block h-full">{card}</a> : card;
}
