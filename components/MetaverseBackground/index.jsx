import React, { useEffect, useState } from "react";
import { alpha, Box } from "@mui/material";
import { Canvas, extend } from "@react-three/fiber";
import { Effects, OrbitControls } from "@react-three/drei";
import ParticleLandscape from "./ParticleLandscape";
import ParticleRising from "./ParticleRising";
import { UnrealBloomPass } from "three-stdlib";
import { useControls } from "leva";
import { colors } from "../../styles/theme";
extend({ UnrealBloomPass });

const fades = {
  bottom: `linear-gradient(to top, ${colors.black}, ${alpha(
    colors.black,
    0
  )} 15%)`,
  top: `linear-gradient(to bottom, ${colors.black}, ${alpha(
    colors.black,
    0
  )} 15%)`,
  both: `linear-gradient(to top, ${colors.black}, ${alpha(
    colors.black,
    0
  )} 15%, ${colors.black}, ${alpha(colors.black, 0)} 85%)`,
};

const MetaverseBackground = ({ fade, opacity }) => {
  const [loaded, setLoaded] = useState(false);

  const { intensity, radius } = useControls({
    intensity: { value: 2.4, min: 0, max: 4, step: 0.01 },
    radius: { value: 1.2, min: 0, max: 2, step: 0.01 },
  });

  useEffect(() => {
    // Canvas onCreate callback doesn't seem to work properly
    window.setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <Box
      component="div"
      sx={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        opacity: !loaded ? 0 : opacity ? opacity : 0.4,
        transition: `opacity 2s ease-in-out`,
        zIndex: 0,
        "&:after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          content: fade ? `""` : null,
          background: fade ? fades[fade] : null,
          pointerEvents: "none",
        },
      }}
    >
      <Canvas
        camera={{
          position: [1.771423577047188, 1.2, -3.4364543723730123],
          fov: 50,
        }}
      >
        <ParticleLandscape />
        <ParticleRising />

        <OrbitControls
          target={[0, 1.3, 0]}
          enablePanning={false}
          enableZoom={false}
          enableRotate={false}
          // allow some degree of rotation if the blobs are able
          // to be rendered with three.js instead of absolute positioned pngs
          // minPolarAngle={Math.PI * 0.45}
          // maxPolarAngle={Math.PI * 0.55}
          // minAzimuthAngle={Math.PI * 0.95}
          // maxAzimuthAngle={Math.PI * 1.05}
        />

        <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={intensity} radius={radius} />
        </Effects>
      </Canvas>
    </Box>
  );
};

export default React.memo(MetaverseBackground);
