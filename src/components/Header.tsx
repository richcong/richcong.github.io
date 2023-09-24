import { Box, Button, Stack, Typography } from "@mui/joy";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import ColorSchemeToggle from "./ColorSchemeToggle";

type HeaderProps = {
  bioRef: React.RefObject<HTMLDivElement>;
  resumeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  hobbiesRef: React.RefObject<HTMLDivElement>;
};

export default function Header({
  bioRef,
  resumeRef,
  projectsRef,
  hobbiesRef,
}: HeaderProps) {
  const handleScroll = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        block: "center",
        inline: "start",
        behavior: "smooth",
      });
    }
  };
  return (
    <Sheet
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        height: "var(--Header-height)",
        zIndex: 9998,
        p: 2,
        gap: 1,
        borderBottom: "1px solid",
        borderColor: "background.level1",
        boxShadow: "sm",
        minWidth: "100%",
        maxWidth: "800px",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            [theme.breakpoints.down("xs")]: {
              "--Header-height": "0px",
            },
          },
        })}
      />
      <Box
        sx={{
          px: {
            xs: 2,
            md: 6,
          },
        }}
      >
        <Typography
          level="h2"
          sx={{
            mt: 2,
            mb: 2,
            ml: -8, //Brings the header to the left in line with the main content
            fontWeight: "600",
          }}
        >
          Richard Cong
        </Typography>
      </Box>
      <Stack direction="row" gap={1}>
        <Button variant="plain" onClick={() => handleScroll(bioRef)}>
          Bio
        </Button>
        <Button variant="plain" onClick={() => handleScroll(resumeRef)}>
          Resume
        </Button>
        <Button variant="plain" onClick={() => handleScroll(projectsRef)}>
          Projects
        </Button>
        <Button variant="plain" onClick={() => handleScroll(hobbiesRef)}>
          Hobbies
        </Button>
      </Stack>
      <Box sx={{ ml: 13 }}></Box>
      <ColorSchemeToggle />
    </Sheet>
  );
}
