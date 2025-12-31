import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="Complete AI-Native textbook for mastering robotics, humanoids, ROS2, VLA systems, and digital twins."
    >
      {/* HERO SECTION */}
      <header
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #0057ff, #00A3FF)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "58px", fontWeight: "bold", marginBottom: "20px", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
          Physical AI & Humanoid Robotics Textbook
        </h1>
        <p style={{ fontSize: "24px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6", opacity: "0.95" }}>
          A complete and practical learning system where you master the future:
          humanoid robotics, ROS 2, large action models, simulation, VLA systems, hardware,
          and advanced AI for next-generation intelligent machines.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link
            className="button button--secondary button--lg"
            style={{ padding: "15px 35px", fontSize: "20px", borderRadius: "50px", fontWeight: "bold", background: "white", color: "#0057ff", border: "none" }}
            to="/docs/introduction/intro"
          >
            Start Reading →
          </Link>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center", color: "#0057ff", fontWeight: "bold" }}>
          What This Textbook Covers
        </h2>
        <p style={{ fontSize: "22px", lineHeight: "1.8", color: "#2c3e50", textAlign: "center" }}>
          This is a complete AI-native engineering curriculum designed for physical AI, humanoid robots,
          embodied intelligence, ROS 2 programming, digital twin simulations, and Vision-Language-Action
          (VLA) systems. Each module builds your robotics superpowers step by step.
        </p>
      </section>

    </Layout>
  );
}

/* ======== STYLES ======== */
const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "16px",
  color: "#555",
  marginBottom: "20px",
  lineHeight: "1.5",
};

const cardBtn = {
  textDecoration: "none",
  background: "#0057ff",
  padding: "10px 16px",
  color: "white",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: "bold",
};

const featureBox = {
  padding: "25px",
  background: "#f5f7fa",
  borderRadius: "10px",
  textAlign: "left",
};
