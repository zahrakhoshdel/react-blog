import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate,
} from "react-ui-animate";

import Navbar from "../Header/Navbar";
import HeaderButton from "../Header/HeaderButton";
import logo from "../../assets/logo-vgv-white.svg";
import classes from "./MainHeader.module.css";

const Header = () => {
  const y = useAnimatedValue(0, { immediate: true });

  useScroll(({ scrollY }) => {
    y.value = scrollY;
  });

  const imageSize = interpolate(y.value, [0, 400], [200, 100], {
    extrapolate: "clamp",
  });

  return (
    <AnimatedBlock
      style={{
        backgroundColor: "#020f30",
        color: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 100,
        paddingRight: 100,
        position: "fixed",
        width: "100%",
        zIndex: "9999",
      }}
    >
      <AnimatedBlock
        style={{
          width: imageSize,
          height: imageSize,
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div>
        <div className={classes["nav-area"]}>
          <Navbar />
        </div>

        <HeaderButton />
      </div>
    </AnimatedBlock>
  );
};

export default Header;
