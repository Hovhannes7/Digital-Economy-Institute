import Image from "next/image";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Institute of Digital Economy"
        subtitle="Research, policy, communities, and Web4 infrastructure for a trustworthy digital economy."
        actions={
          <>
            <Button href="/publications">Explore Publications</Button>
            <Button href="/communities" variant="secondary">
              Join a Community
            </Button>
          </>
        }
      >
        <div className="mt-8">
          <Image
            src="/images/home-sketch.webp"
            alt="Black-and-white sketch of Armenia’s digital economy vision"
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-3xl border border-line bg-white shadow-subtle"
          />
        </div>

        <p>
          The Institute of Digital Economy develops research, publications,
          expert communities, and open digital infrastructure for transparent
          computational research, reproducible science, responsible AI, and
          evidence-based policymaking.
        </p>
      </Hero>
    </>
  );
}
