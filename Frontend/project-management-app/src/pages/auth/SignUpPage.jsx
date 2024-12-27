import React, { useState } from "react";
import SignUp from "../../components/Auth/SignUp";

export default function SignUpPage({ onSignUpSuccess }) {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Şifre eşleşmesini kontrol et
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match!");
        return; // Eğer eşleşmiyorsa formu gönderme
      }
  
      // Form geçerli, işlem başarılı
      console.log("Sign-up successful:", formData);
      setErrorMessage(""); // Hata mesajını temizle
      alert("Sign-up successful!");
      onSignUpSuccess(); // Yönlendirme işlemi
    };
  
    return (
      <SignUp
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    );
  }