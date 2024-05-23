import { useRef, useState } from "react";
import "./SignUp.css";
import { useAuth } from "../../Context/AuthProvider"; //usecontext
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // useref data of email and password
  const emialRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();

  // context
  const authctx = useAuth();

  // usestate
  const [error, setError] = useState(false);

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (passwordRef.current.value != passwordConfirmRef.current.value) {
      setError(true);
      return;
    }
    try {
      const currentUser = await authctx.signUp(
        emialRef.current.value,
        passwordRef.current.value
      );
      authctx.setCurrentUser(currentUser);
      navigate("/homepage");
    //   alert("Registration Successful,Please Login to continue");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <h1>Sign Up</h1>
      {error && <div>Password and Confirm Password do not match</div>}
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
        <label htmlFor="">Password Confirmation</label>
        <br />
        <input type="password" ref={passwordConfirmRef} required />
        <br />
        <br />
        <button className="signupBtn">Sign Up</button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Alerady have an Account? <Link to="/login">Log In</Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;