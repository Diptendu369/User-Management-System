import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: trimmedEmail,
        password: trimmedPassword,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/users");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={styles.leftContainer}>
          <h2>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button
              type="submit"
              style={styles.button}
              disabled={loading || !email || !password}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
        </div>
        <div
          style={{
            ...styles.rightContainer,
            display: isMobile ? "flex" : "block",
          }}
        >
          <img
            src="https://fastly.picsum.photos/id/318/200/200.jpg?hmac=bXfpcSpOySqXMIev1AISKO15vvxPgau4JEA36kuhG1Y"
            alt="Welcome"
            style={styles.image}
          />
        </div>
      </div>
      <p style={styles.footer}>
        Made by{" "}
        <a
          href="https://github.com/diptendu369"
          target="_blank"
          style={styles.link}
        >
          @Diptendu
        </a>
      </p>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "20px",
  },
  container: {
    display: "flex",
    width: "90%",
    maxWidth: "800px",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  leftContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    outline: "none",
  },
  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    opacity: "0.9",
    borderRadius: "5px",
  },
  error: { color: "red", marginTop: "10px" },
  rightContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
};

export default Login;
