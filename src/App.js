import React from "react";
import LoginForm from "./Components/LoginForm";
import AuthFlow from "./Components/AuthFlow";
import SignInForm from "./Components/SignInForm";

const App = () => (
  <div>
    <h1>Login Page</h1>
    <SignInForm />
    <LoginForm />
    <AuthFlow />
  </div>
);

export default App;
