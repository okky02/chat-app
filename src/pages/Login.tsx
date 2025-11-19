import { useState } from "react";
import LoginHero from "../components/login/LoginHero";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side Section */}
      <div className="hidden rounded-r-[200px] lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12">
        <LoginHero />
      </div>

      {/* Right Side Section */}
      <div className="flex-1 flex flex-col justify-center mb-4 py-2 px-4 sm:px-6 lg:px-20">
        <LoginForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
          onGoogleLogin={handleGoogleLogin}
        />
      </div>
    </div>
  );
}
