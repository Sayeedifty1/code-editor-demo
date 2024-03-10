// src/App.js
import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import Compiler from "./Compiler";

const App = () => {
  const [code, setCode] = useState("<h1 class=text-4xl>hello</h1>");

  return (
    <div className="flex p-8">
      <div className="flex-1 h-[50vh] w-screen">
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
          className="w-full h-full"
        />
      </div>
      <div className="flex-1 ml-4">
        <Compiler code={code} />
      </div>
    </div>
  );
};

export default App;
