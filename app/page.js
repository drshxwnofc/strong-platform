
export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>☁️ Strong</h1>
      <p>Push code. Go live.</p>

      <div style={{ marginTop: 30 }}>
        <h2>Your Apps</h2>
        <div style={{ padding: 20, border: "1px solid #ccc" }}>
          <strong>my-first-app</strong>
          <p>Status: Running</p>
          <a href="#">https://my-first-app.stringapp.com</a>
        </div>
      </div>
    </main>
  );
}
