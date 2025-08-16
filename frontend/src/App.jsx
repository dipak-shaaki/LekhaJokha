import React from 'react'
import { useEffect, useState } from "react";
import API from "./api/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">{message}</h1>
    </div>
  );
}

export default App;
