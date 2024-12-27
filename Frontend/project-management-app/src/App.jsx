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

  // Sayfa geçişleri
  if (currentPage === "login") {
    return <SignInPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "signUp") {
    return <SignUpPage onSignUpSuccess={() => setCurrentPage("login")} />;
  }

  if (currentPage === "addProject") {
    return (
      <AddProjectPage
        projectsState={projectsState}
        setProjectsState={setProjectsState}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <MainPage
      projectsState={projectsState}
      setProjectsState={setProjectsState}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;
