import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate,
} from "react-ui-animate";

import logo from "../../assets/logo-vgv-white.svg";

const MainHeader = () => {
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
        backgroundColor: "#060338",
        display: "flex",
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

      <div
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 20,
          flex: 1,
          color: "#ffffff",
        }}
      >
        <h1>menus</h1>
      </div>

      <div style={{ color: "#ffffff", cursor: "pointer" }}>
        <h2>Button</h2>
      </div>
    </AnimatedBlock>
  );
};

export default MainHeader;
