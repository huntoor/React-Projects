import ProjectList from "./ProjectList";
import { MOCK_PROJECTS } from "./MockProjects";

export default function ProjectPage() {
  return (
    <>
      <h1>Project</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}