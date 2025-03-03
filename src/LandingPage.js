import React from "react"

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Elog에 오신 것을 환영합니다</h1>
      <p style={styles.description}>
        Elog는 당신의 경험을 기록하고 공유할 수 있는 플랫폼입니다.
      </p>
      <a href="/edit/experiences" style={styles.button}>
        경험 입력하기
      </a>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2.5em",
    color: "#333",
  },
  description: {
    fontSize: "1.2em",
    color: "#666",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
}

export default LandingPage
