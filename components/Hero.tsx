import React from "react";
import { alpha, Box, Button, Container, Typography } from "@mui/material";
import { animations, colors, typography } from "../styles/theme";
import Blobs from "./Blobs";
import ReactGA from "react-ga";

const Hero = (props: { scrollToProducts: () => void }) => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "calc(var(--vh, 1vh) * 100)",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Blobs section="hero" />
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s forwards`,
            opacity: 0,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <Box
            component="span"
            sx={{
              color: alpha(colors.white, 0.7),
              display: "block",
              ...typography.display.h4,
              mb: 0.5,
            }}
          >
            Unleashing
          </Box>
          <Box
            component="div"
            sx={{
              textShadow: `0 4px 64px rgba(255,255,255,0.3)`,
              display: "block",
              fontWeight: 800,
              ...typography.display.h1,
              lineHeight: 0.9,
            }}
          >
            Autonomous Intelligence
          </Box>
        </Typography>
        <Typography
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s 1s forwards`,
            opacity: 0,
            mt: 4,
            textAlign: "center",
          }}
        >
          AI Agents and Web3 Technologies
          <br />
          enabling human-centric applications.
        </Typography>
        <Button
          color="primary"
          size="large"
          onClick={props.scrollToProducts}
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s 1.25s forwards`,
            opacity: 0,
            mt: 4,
          }}
        >
          Our Products
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
