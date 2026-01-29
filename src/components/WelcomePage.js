import React from "react";
import styles from "../styles";
import logo from "./logo_storyspark.png";  // Import the image

export default function WelcomePage({ onStart }) {
  return (
    <div
      style={{
        ...styles.centered,
        backgroundColor: "#FFFFFF", // white background instead of dark blue
        color: "#00003D",           // dark blue text for contrast
      }}
    >
      <img
        src={logo}
        alt="Ad Story Generator Logo"
        style={{ maxWidth: 500, marginBottom: 20 }}
      />
      <p style={{ fontSize: "1.2rem", color: "#333" }}>
        Create creative marketing stories with AI
      </p>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 15,
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          style={styles.mainBtn}
          onClick={() => onStart("chat")}
          aria-label="Get started with Chat feature"
        >
          Get Started with Chat
        </button>
        <button
          type="button"
          style={styles.mainBtn}
          onClick={() => onStart("form")}
          aria-label="Get started with Form feature"
        >
          Get Started with Form
        </button>
      </div>
    </div>
  );
}
