import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage";
import ChatPage from "./components/ChatPage";
import FormPage from "./components/FormPage";
import styles from "./styles";

export default function App() {
  const [page, setPage] = useState("welcome");
  const mainRef = useRef(null);

  // Focus main content when page changes (for screen readers)
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [page]);

  return (
    <div style={styles.app}>
      {page !== "welcome" && (
        <NavBar currentPage={page} onNavigate={setPage} />
      )}
      <main
        tabIndex="-1"
        ref={mainRef}
        style={styles.mainContent}
        aria-live="polite"
      >
        {page === "welcome" && <WelcomePage onStart={setPage} />}
        {page === "chat" && <ChatPage />}
        {page === "form" && <FormPage />}
      </main>
    </div>
  );
}
