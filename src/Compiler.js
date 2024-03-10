// src/Compiler.js
import React, { useState, useEffect } from "react";

const Compiler = ({ code }) => {
  const [compiledCode, setCompiledCode] = useState("");

  useEffect(() => {
    // Simple compilation logic, you might need to adjust this based on your needs
    try {
      setCompiledCode(code);
    } catch (error) {
      setCompiledCode(`Compilation Error: ${error.message}`);
    }
  }, [code]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: compiledCode }}
      style={{ marginTop: "1rem" }}
    />
  );
};

export default Compiler;
