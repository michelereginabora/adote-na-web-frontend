import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubButton: React.FC = () => {
  return (
    <a
      href="https://github.com/michelereginabora/adote-na-web-frontend"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#333",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      <FaGithub style={{ marginRight: "8px" }} />
      Repositório no Github
    </a>
  );
};

export default GithubButton;
