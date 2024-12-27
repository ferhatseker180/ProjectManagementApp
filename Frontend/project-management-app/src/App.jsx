import { useState } from "react";
import AddProjectPage from "./pages/add_project_page/AddProjectPage";
import MainPage from "./pages/main_page/MainPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const [currentPage, setCurrentPage] = useState("login"); // 'login', 'signUp', 'main', or 'addProject'

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  const handleStartAddProject = () => {
    setCurrentPage("addProject");
  };

  const handleCancelAddProject = () => {
    setCurrentPage("main");
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
    setCurrentPage("main");
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  // Sayfa geçişleri
  if (currentPage === "login") {
    console.log("Currently on SignInPage");
    return <SignInPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "signUp") {
    console.log("Currently on SignUpPage");
    return <SignUpPage onSignUpSuccess={() => setCurrentPage("login")} />;
  }

  if (currentPage === "addProject") {
    console.log("Currently on AddProjectPage");
    return (
      <AddProjectPage
        handleAddProject={handleAddProject}
        handleCancelAddProject={handleCancelAddProject}
      />
    );
  }

  console.log("Currently on MainPage");
  return (
    <MainPage
      projectsState={projectsState}
      handleSelectProject={handleSelectProject}
      handleStartAddProject={handleStartAddProject}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      handleDeleteProject={handleDeleteProject}
    />
  );
}

export default App;
