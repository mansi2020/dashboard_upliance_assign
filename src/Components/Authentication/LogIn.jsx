import { useRef, useState } from "react";
import { useAuth } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
  // useref data of email and password----------------------------------
  const emialRef = useRef();
  const passwordRef = useRef();

  //useState data ---------------------------------
  const [loading, setLoading] = useState(false);

  // context---------------------------------------------
  const authctx = useAuth();

  // handleSubmit---------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        const currentUser = await authctx.login(
          emialRef.current.value,
          passwordRef.current.value
        );
        navigate("/homepage");
        authctx.setCurrentUser(currentUser);
      } catch (err) {
        alert("Create a New Account");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="register-container">
      <h1>Log In</h1>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input type="email" ref={emialRef} required />
        <br />
        <label>Password</label>
        <br />
        <input type="password" ref={passwordRef} required />
        <br />
        <br />
        <button
          className="loginBtn"
          style={{
            backgroundColor:
              loading == true
                ? "rgba(0, 140, 255, 0.5)"
                : "rgba(0, 140, 255, 0.873)",
          }}
        >
          Log In
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Need an Account <Link to="/">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogIn;