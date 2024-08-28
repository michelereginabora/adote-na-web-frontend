import React from "react";
import { FaGithub } from "react-icons/fa"; // Importa o ícone do GitHub

const GithubButton: React.FC = () => {
  return (
    <a
      href="https://github.com/seu-repositorio"
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
      <FaGithub style={{ marginRight: "8px" }} /> {/* Ícone do GitHub */}
      Repositório no Github
    </a>
  );
};

export default GithubButton;
