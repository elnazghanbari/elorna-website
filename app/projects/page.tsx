import type { Metadata } from "next";
import Link from "next/link";
import ProjectShowcase from "./ProjectShowcase";

export const metadata: Metadata = {
  title: "Engineering portfolio",
  description:
    "Explore ELORNA fullstack JavaScript prototypes in AgTech, finance, and command interfaces.",
  alternates: { canonical: "/projects" },
};
export default function ProjectsPage() {
  return (
    <main style={{ background: "#05070c", minHeight: "100vh" }}>
      <header
        style={{
          maxWidth: 1152,
          margin: "auto",
          padding: "30px 20px",
          color: "#e2e8f0",
        }}
      >
        <Link
          href="/"
          style={{ color: "inherit", textDecoration: "none", letterSpacing: 3 }}
        >
          ← ELORNA
        </Link>
      </header>
      <ProjectShowcase />
      <footer
        style={{
          maxWidth: 1152,
          margin: "auto",
          padding: "30px 20px 100px",
          color: "#94a3b8",
        }}
      >
        <Link href="/#contact" style={{ color: "inherit" }}>
          Discuss a remote project →
        </Link>
      </footer>
    </main>
  );
}
