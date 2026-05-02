import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return { title: "Project | Shekh Mahdi Mesbah" };
  }
  return {
    title: `${project.title} | Shekh Mahdi Mesbah`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <ProjectDetailView project={project} />
      <Footer />
    </>
  );
}
