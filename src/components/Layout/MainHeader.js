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

  const boxShadow = interpolate(
    y.value,
    [0, 400],
    ["0px 0px 0px rgba(0,0,0,0.2)", "0px 4px 20px rgba(0,0,0,0.2)"],
    {
      extrapolate: "clamp",
    }
  );

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
        boxShadow: boxShadow,
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
