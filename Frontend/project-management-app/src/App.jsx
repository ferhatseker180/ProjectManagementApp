import { useState } from "react";
import AddProjectPage from "./pages/add_project_page/AddProjectPage";
import MainPage from "./pages/main_page/MainPage";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const [currentPage, setCurrentPage] = useState("login"); // 'login', 'signUp', 'main', or 'addProject'

  function handleAddTask(text) {
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
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleStartAddProject() {
    setCurrentPage("addProject");
  }

  function handleCancelAddProject() {
    setCurrentPage("main");
  }

  function handleAddProject(projectData) {
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
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  // Login ekranı
  if (currentPage === "login") {
    return (
      <SignIn
        onLogin={() => setCurrentPage("main")}
        onSignUp={() => setCurrentPage("signUp")}
      />
    );
  }

  // Sign Up ekranı
  if (currentPage === "signUp") {
    return <SignUp onSignUpSuccess={() => setCurrentPage("login")} />;
  }

  // Proje ekleme ekranı
  if (currentPage === "addProject") {
    return (
      <AddProjectPage
        handleAddProject={handleAddProject}
        handleCancelAddProject={handleCancelAddProject}
      />
    );
  }

  // Ana sayfa (MainPage)
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
