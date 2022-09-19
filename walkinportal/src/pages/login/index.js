import React from "react";
import Header from "./Header";
import "./Header.css";
import Form from "./Form";
import "./Form.css";
import Footer from "./Footer";
import "./Footer.css";

export default function Login() {
  return (
    <div className="login">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
