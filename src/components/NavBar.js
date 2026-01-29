import React from "react";
import styles from "../styles";
import logo from "./logo_storyspark_white.png"; // adjust the path if needed

export default function NavBar({ currentPage, onNavigate }) {
  return (
    <nav style={styles.nav} aria-label="Main navigation">
      {/* Clickable logo that navigates to welcome page */}
      <div
        style={styles.logo}
        title="Ad Story Generator"
        onClick={() => onNavigate("welcome")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onNavigate("welcome")}
        aria-label="Go to Welcome Page"
      >
        <img
          src={logo}
          alt="Ad Story Generator Logo"
          style={{ height: 40, cursor: "pointer" }}
        />
      </div>

      {/* Only Chat and Form buttons */}
      <div style={styles.navButtons}>
        {["chat", "form"].map((page) => (
          <button
            key={page}
            type="button"
            style={currentPage === page ? styles.activeBtn : styles.navBtn}
            onClick={() => onNavigate(page)}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Navigate to ${page.charAt(0).toUpperCase() + page.slice(1)} page`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
