// pages/Register.tsx
import { useState } from "react";
import RegisterHero from "../components/register/RegisterHero";
import RegisterForm from "../components/register/RegisterForm";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", {
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Form Section */}
      <div className="flex-1 flex flex-col justify-center mb-4 py-2 px-4 sm:px-6 lg:px-20">
        <RegisterForm
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          onNameChange={setName}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onConfirmPasswordChange={setConfirmPassword}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Right Side - Brand/Image Section */}
      <div className="hidden rounded-l-[200px] lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12">
        <RegisterHero />
      </div>
    </div>
  );
}
