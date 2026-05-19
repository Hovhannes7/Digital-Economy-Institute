import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Research institute"
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
        The Institute of Digital Economy develops research, publications,
        expert communities, and open digital infrastructure for transparent
        computational research, reproducible science, responsible AI, and
        evidence-based policymaking.
      </Hero>
    </>
  );
}
