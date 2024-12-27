import React, { useState } from "react";
import SignIn from "../../components/Auth/SignIn";

export default function SignInPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login successful!");
    setCurrentPage("main");
  };

  return (
    <SignIn
      onLogin={handleSubmit}
      onSignUp={() => setCurrentPage("signUp")}
    />
  );
}
