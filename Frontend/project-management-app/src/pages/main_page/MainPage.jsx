import React from 'react';
import SelectedProject from '../../components/SelectedProject';
import ProjectsSidebar from '../../components/ProjectsSidebar';
import NoProjectSelected from '../../components/NoProjectSelected';


export default function MainPage({
  projectsState,
  handleSelectProject,
  handleStartAddProject,
  handleAddTask,
  handleDeleteTask,
  handleDeleteProject
}) {
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks.filter(
          (task) => task.projectId === projectsState.selectedProjectId
        )}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}
