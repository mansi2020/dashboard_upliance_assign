import { useContext } from "react";
import Counter from "./../Counter/Counter";
import UserdataForm from "../UserdataForm/UserdataForm";
import TextEditor from "../TextEditor/TextEditor";
import { useSpring, animated } from "@react-spring/web";
import { UserContext } from "../../Context/Context";
import "./HomePage.css";

const HomePage = () => {
  // context data
  const { counter } = useContext(UserContext);

  // Calculate the background level as a percentage
  const backgroundLevel = Math.min(counter, 100);

  // Use react-spring to animate the height
  const springProps = useSpring({
    height: `${backgroundLevel}%`,
    config: { tension: 280, friction: 60 }, // Bezier curve-like effect
  });

  return (
    <div className="homepage-container">
      <animated.div className="background" style={springProps}></animated.div>
      {/* home page */}
      <div className="home-page-sub-container">
        <div className="counter-form-container">
          <Counter />
          <UserdataForm />
        </div>

        <TextEditor />
      </div>
    </div>
  );
};

export default HomePage;
