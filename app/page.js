"use client"; // required for React hooks

import { useState, useEffect } from "react";

const API_URL = "strong-backend-api-production.up.railway.app"; // <- replace with your URL

export default function Home() {
  const [apps, setApps] = useState([]);
  const [newAppName, setNewAppName] = useState("");
  const [repoUrl, setRepoUrl] = useState("");

  // Fetch apps from backend
  const fetchApps = async () => {
    const res = await fetch(`${API_URL}/apps`);
    const data = await res.json();
    setApps(data);
  };

  useEffect(() => {
    fetchApps();
  }, []);

  // Create a new app
  const createApp = async () => {
    if (!newAppName || !repoUrl) return alert("Name & repo required!");
    const res = await fetch(`${API_URL}/apps`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newAppName, repo: repoUrl }),
    });
    const data = await res.json();
    setNewAppName("");
    setRepoUrl("");
    fetchApps();
  };

  // Deploy app
  const deployApp = async (id) => {
    await fetch(`${API_URL}/apps/${id}/deploy`, { method: "POST" });
    fetchApps();
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>☁️ Strong Dashboard</h1>

      <div style={{ marginTop: 30 }}>
        <h2>Create New App</h2>
        <input
          type="text"
          placeholder="App Name"
          value={newAppName}
          onChange={(e) => setNewAppName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Git Repo URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
        <button onClick={createApp}>Create App</button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h2>Your Apps</h2>
        {apps.map((app) => (
          <div key={app.id} style={{ padding: 20, border: "1px solid #ccc", marginTop: 10 }}>
            <strong>{app.name}</strong>
            <p>Status: {app.status}</p>
            <a href={app.url} target="_blank">{app.url}</a>
            <br />
            <button onClick={() => deployApp(app.id)}>Deploy</button>
          </div>
        ))}
      </div>
    </main>
  );
    }
