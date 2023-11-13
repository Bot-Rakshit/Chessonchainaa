import { Link, Box, Stack, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import Image, { StaticImageData } from "next/image";
import MagentaBlob from "../public/images/blobs/multi.png";
import CyanBlob from "../public/images/blobs/user-friendly.png";
import GreenBlob from "../public/images/blobs/secure.png";
import { animations, colors } from "../styles/theme";
import { BenefitCardProps } from "../constants/benefits";

interface BlobProps {
  magenta: StaticImageData;
  cyan: StaticImageData;
  green: StaticImageData;
}

const blobs: BlobProps = {
  magenta: MagentaBlob,
  cyan: CyanBlob,
  green: GreenBlob,
};

const BenefitCard = ({ slug, color, title, description }: BenefitCardProps) => {
  return (
    <Link href={slug}>
      <Box
        component="div"
        sx={{
          marginTop: "3rem",
          position: "relative",
          transition: "transform 0.3s",
          "&:hover": { transform: "translateY(-10px)" },
        }}
      >
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: "50%",
            top: ["-20%", "-40%", -72],
            transform: "translateX(-50%)",
            width: ["45%", "35%", "50%"],
            zIndex: 1,
          }}
        >
          <Box
            component="div"
            sx={{
              "@keyframes shadow": {
                "0%, 100%": {
                  transform: "scaleX(1) scaleY(0.2) translateY(180%)",
                  opacity: 0.6,
                },
                "50%": {
                  transform: "scaleX(0.7) scaleY(0.2) translateY(180%)",
                  opacity: 1,
                },
              },
              animation: `shadow 5s ease-in-out infinite`,
              animationDelay:
                color === "cyan" ? `700ms` : color === "green" ? `1400ms` : 0,
              position: "absolute",
              width: "110%",
              top: "-5%",
              left: "-5%",
              aspectRatio: "1/1",
              background: `radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0) 75%)`,
              transform: "scaleY(0.2) translateY(180%)",
              zIndex: -1,
            }}
          />
          <Box
            component="div"
            sx={{
              ...animations.float,
              animation: `float 5s ease-in-out infinite`,
              animationDelay:
                color === "cyan" ? `700ms` : color === "green" ? `1400ms` : 0,
            }}
          >
            <Image
              src={blobs[color]}
              alt={title}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            background: colors[color],
            boxShadow: shadows[24],
            borderRadius: 4,
            top: 6,
            bottom: 6,
            left: 6,
            right: 6,
            zIndex: 0,
          }}
        />
        <Box
          component="div"
          sx={{
            background: `linear-gradient(180deg, ${colors.iris[800]} 0%, #0F1031 97.92%)`,
            px: 4,
            pt: [14, 10, 16],
            pb: 8,
            minHeight: [null, null, 320],
            // height: "24rem",
            borderRadius: 6,
            clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 56px, calc(100% - 48px) 0)`,
            boxShadow: shadows[24],
          }}
        >
          <Stack spacing={3}>
            <Typography component="h3" variant="h5" color={colors[color]}>
              {title}
            </Typography>
            <Typography color={colors.white}>{description}</Typography>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default BenefitCard;
