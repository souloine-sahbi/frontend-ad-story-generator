const styles = {
  centered: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#00003D", // dark blue background
    color: "#FFFFFF",           // white text for contrast
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: 20,
    textAlign: "center",
  },

  mainBtn: {
    backgroundColor: "#732000", // dark reddish brown button
    color: "#FFFFFF",
    border: "none",
    padding: "12px 24px",
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(115, 32, 0, 0.6)",
    transition: "background-color 0.3s ease",
  },

  mainBtnHover: {
    backgroundColor: "#5a1a00", // darker shade for hover
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#00003D", // dark blue navbar
    boxShadow: "0 2px 6px rgba(0, 0, 61, 0.7)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  logo: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#FFFFFF",
    cursor: "default",
  },

  navButtons: {
    display: "flex",
    gap: 15,
  },

  navBtn: {
    backgroundColor: "transparent",
    border: "2px solid transparent",
    color: "#FFFFFF",
    padding: "8px 18px",
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "600",
    cursor: "pointer",
    transition: "border-color 0.3s ease, background-color 0.3s ease",
  },

  activeBtn: {
    backgroundColor: "#732000", // dark reddish brown background
    color: "#FFFFFF",
    border: "2px solid #732000",
  },

  chatContainer: {
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    maxWidth: 800,
    margin: "30px auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00003D", // text in dark blue inside chat container
  },

  chatWindow: {
    flex: 1,
    padding: 20,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    backgroundColor: "#F0F0F0", // light gray for chat background
    borderRadius: "12px 12px 0 0",
  },

  message: {
    maxWidth: "70%",
    padding: 12,
    borderRadius: 14,
    fontSize: 16,
    lineHeight: 1.4,
    wordBreak: "break-word",
    backgroundColor: "#732000", // dark reddish brown message background
    color: "#FFFFFF",
  },

  inputArea: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: 15,
    backgroundColor: "#00003D", // dark blue input area background
    borderRadius: "0 0 12px 12px",
  },

  input: {
    flex: 1,
    padding: "12px 16px",
    fontSize: 16,
    borderRadius: 8,
    border: "none",
    outline: "none",
    marginRight: 10,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00003D",       // dark blue text in input
    backgroundColor: "#fff", // white input box background
  },

  sendBtn: {
    backgroundColor: "#732000", // dark reddish brown button
    color: "#FFFFFF",
    border: "none",
    padding: "12px 24px",
    borderRadius: 8,
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(115, 32, 0, 0.5)",
    transition: "background-color 0.3s ease",
  },

  formContainer: {
    maxWidth: 600,
    margin: "40px auto",
    padding: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00003D",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  textInput: {
    padding: "12px 16px",
    fontSize: 16,
    borderRadius: 8,
    border: "1.5px solid #CCC",
    outline: "none",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    transition: "border-color 0.3s ease",
    color: "#00003D",
  },

  storyBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#F0F0F0",
    color: "#00003D",
    fontSize: 16,
    lineHeight: 1.5,
    whiteSpace: "pre-wrap",
  },
};

export default styles;
