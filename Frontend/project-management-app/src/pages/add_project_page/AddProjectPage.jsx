import React from 'react';
import NewProject from '../../components/NewProject';

export default function AddProjectPage({
  projectsState,
  setProjectsState,
  setCurrentPage
}) {
  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
    setCurrentPage("main");
  };

  const handleCancelAddProject = () => {
    setCurrentPage("main");
  };

  return (
    <main className="h-screen my-8 flex justify-center">
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    </main>
  );
}
