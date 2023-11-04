import { Player } from "@lottiefiles/react-lottie-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Tooltip } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import "../css/RocketAnimation.css";
import ProjectCard from "./ProjectCard.tsx";
import ResumeTimeline from "./ResumeTimeline.tsx";
import SkillsCard from "./SkillsCard.tsx";

type MyProfileProps = {
  resumeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
};

export default function MyProfile({
  resumeRef,
  projectsRef,
  skillsRef,
}: MyProfileProps) {
  const { mode } = useColorScheme();
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: {
            xs: 2,
            md: 6,
          },
          py: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Card
          variant="plain"
          sx={{ mt: 0, pt: 0, backgroundColor: "background.body" }}
        >
          <Stack
            spacing={3}
            sx={{
              display: { xs: "none", md: "flex" },
              my: 1,
              alignItems: "center",
            }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{
                  flex: 1,
                  width: 150,
                  borderRadius: "100%",
                }}
              >
                <img
                  src="/face-photo.jpg"
                  srcSet="/face-photo.jpg"
                  loading="lazy"
                  alt="Photo of myself"
                />
              </AspectRatio>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Typography level="h2" fontWeight={400}>
                Hello! I'm Richard Cong. I'm a Software Developer working for
                the Australian Government in Canberra, Australia.
              </Typography>
            </Stack>
            <Box display="flex">
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/richardcong"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "--IconButton-size": "40px",
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/richcong"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "--IconButton-size": "40px",
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              display: { xs: "flex", md: "none" },
              mb: 1,
              alignItems: "center",
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 100, borderRadius: "100%" }}>
              <img
                src="/face-photo.jpg"
                srcSet="/face-photo.jpg"
                loading="lazy"
                alt="Photo of myself"
              />
            </AspectRatio>
            <Stack direction="row" spacing={2}>
              <Stack direction="column" gap={1} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <Typography level="body-lg">
                    Hello! I'm Richard Cong. I'm a Software Developer working
                    for the Australian Government in Canberra, Australia.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box display="flex">
              <Box sx={{ flex: 1 }}></Box>
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/richardcong"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "--IconButton-size": "40px",
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/richcong"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "--IconButton-size": "40px",
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Card>
        {mode === "dark" ? (
          <Player
            autoplay
            loop
            src={"/rocket-animation.json"}
            style={{ height: "25vh" }}
          />
        ) : (
          <Player
            autoplay
            loop
            src={"/rocket-animation.json"}
            style={{ height: "25vh" }}
            className={"light-mode"}
          />
        )}
        <SkillsCard skillsRef={skillsRef} />
        <Card color="primary" ref={resumeRef} sx={{ scrollMarginTop: "70px" }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Resume</Typography>
            <Typography level="body-sm">
              My work experience and education
            </Typography>
          </Box>
          <Divider />
          <ResumeTimeline />
        </Card>
        <Card color="primary" ref={projectsRef}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Projects</Typography>
            <Typography level="body-sm">
              Personal projects I've worked on
            </Typography>
          </Box>
          <Divider />
          <Stack sx={{ my: { xs: 1, md: 3 }, mx: { xs: 0, md: 5 } }}>
            <ProjectCard
              title="Portfolio"
              description="A showcase of my dev journey"
              src="/construction-tools.svg"
              srcSet="/construction-tools.svg"
              year={2023}
              type="Website"
              tech={["React", "Joy UI", "Typescript", "Vite", "Github Pages"]}
              links={{
                goto: "https://richardcong.com",
                source: "https://github.com/richcong/richcong.github.io",
              }}
            />
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
