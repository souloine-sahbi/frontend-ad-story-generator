import React, { useState, useRef } from "react";
import styles from "../styles";

export default function FormPage() {
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const productRef = useRef(null);
  const audienceRef = useRef(null);
  const toneRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedProduct = product.trim();
    const trimmedAudience = audience.trim();
    const trimmedTone = tone.trim();

    if (!trimmedProduct) {
      setStory("Please enter the Product Name.");
      productRef.current?.focus();
      return;
    }
    if (!trimmedAudience) {
      setStory("Please enter the Target Audience.");
      audienceRef.current?.focus();
      return;
    }
    if (!trimmedTone) {
      setStory("Please enter the Tone.");
      toneRef.current?.focus();
      return;
    }

    setLoading(true);
    setStory("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/form/ask", {  // <-- updated endpoint here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: trimmedProduct,
          audience: trimmedAudience,
          tone: trimmedTone,
        }),
      });
      const data = await res.json();
      setStory(data.story || "No story generated.");
    } catch {
      setStory("Error contacting backend. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Create Ad Story</h2>
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <label htmlFor="productInput">
          Product Name:
          <input
            id="productInput"
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            style={styles.textInput}
            ref={productRef}
            disabled={loading}
            required
            aria-required="true"
            aria-describedby="productHelp"
            autoComplete="off"
          />
        </label>

        <label htmlFor="audienceInput">
          Target Audience:
          <input
            id="audienceInput"
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            style={styles.textInput}
            ref={audienceRef}
            disabled={loading}
            required
            aria-required="true"
            aria-describedby="audienceHelp"
            autoComplete="off"
          />
        </label>

        <label htmlFor="toneInput">
          Tone (e.g., Inspiring, Funny):
          <input
            id="toneInput"
            type="text"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            style={styles.textInput}
            ref={toneRef}
            disabled={loading}
            required
            aria-required="true"
            aria-describedby="toneHelp"
            autoComplete="off"
          />
        </label>

        <button
          type="submit"
          style={styles.mainBtn}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Generating..." : "Generate Story"}
        </button>
      </form>

      {story && (
        <div
          style={styles.storyBox}
          dangerouslySetInnerHTML={{ __html: story.replace(/\n/g, "<br/>") }}
        />
      )}
    </div>
  );
}
