import { Box, Button, GlobalStyles, Stack, Typography } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import ColorSchemeToggle from "./ColorSchemeToggle";

type HeaderProps = {
  skillsRef: React.RefObject<HTMLDivElement>;
  resumeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
};

export default function Header({
  skillsRef,
  resumeRef,
  projectsRef,
}: HeaderProps) {
  const handleScroll = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Computer view --------------------------------------------------------- */}
      <Sheet
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          height: "55px",
          zIndex: 9998,
          p: 2,
          gap: 1,
          borderBottom: "1px solid",
          borderColor: "background.level1",
          boxShadow: "sm",
          minWidth: "100%",
        }}
      >
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
          <Button variant="plain" onClick={() => handleScroll(skillsRef)}>
            Skills
          </Button>
          <Button variant="plain" onClick={() => handleScroll(resumeRef)}>
            Resume
          </Button>
          <Button variant="plain" onClick={() => handleScroll(projectsRef)}>
            Projects
          </Button>
        </Stack>
        <Box sx={{ ml: 12.5 }}></Box>
        <ColorSchemeToggle />
      </Sheet>
      {/* Mobile view --------------------------------------------------------- */}
      <Sheet
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          height: "var(--Header-height)",
          zIndex: 9998,
          p: 2,
          pl: { xs: 1, md: 4 },
          gap: 1,
          borderBottom: "1px solid",
          borderColor: "background.level1",
          boxShadow: "sm",
          minWidth: "100%",
        }}
      >
        <GlobalStyles
          styles={(theme) => ({
            ":root": {
              "--Header-height": "70px",
              [theme.breakpoints.down("xs")]: {
                "--Header-height": "0px",
              },
            },
          })}
        />
        <Stack direction={"column"}>
          <Typography
            level="h4"
            sx={{
              pl: "12px",
              fontWeight: "600",
            }}
          >
            Richard Cong
          </Typography>
          <Stack direction="row">
            <Button
              variant="plain"
              size="sm"
              onClick={() => handleScroll(skillsRef)}
            >
              Skills
            </Button>
            <Button
              variant="plain"
              size="sm"
              onClick={() => handleScroll(resumeRef)}
            >
              Resume
            </Button>
            <Button
              variant="plain"
              size="sm"
              onClick={() => handleScroll(projectsRef)}
            >
              Projects
            </Button>
          </Stack>
        </Stack>
        <ColorSchemeToggle />
      </Sheet>
    </>
  );
}
