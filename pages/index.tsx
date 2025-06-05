
// pages/index.tsx

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0f0f0f",
      color: "#ffffff",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀 Arbiboard è online!</h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        Il backend, i WebSocket e le API sono attivi. La UI dinamica sarà presto disponibile.
      </p>
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", opacity: 0.7 }}>
        Versione iniziale di deploy – frontend base.
      </p>
    </div>
  );
}
