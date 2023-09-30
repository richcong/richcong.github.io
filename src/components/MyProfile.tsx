import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiMui, SiTypescript } from "react-icons/si";

import { Chip, Tooltip } from "@mui/joy";
import ProjectCard from "./ProjectCard.tsx";
import ResumeTimeline from "./ResumeTimeline.tsx";

type MyProfileProps = {
  bioRef: React.RefObject<HTMLDivElement>;
  resumeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  hobbiesRef: React.RefObject<HTMLDivElement>;
};

export default function MyProfile({
  bioRef,
  resumeRef,
  projectsRef,
  hobbiesRef,
}: MyProfileProps) {
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
        <Card ref={bioRef}>
          <Box display="flex" flexDirection="row" sx={{ mb: 1 }}>
            <Box>
              <Typography level="title-md">Bio</Typography>
              <Typography level="body-sm">Hey, I'm Richard!</Typography>
            </Box>
            <Box flex={1}></Box>
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
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Role</FormLabel>
                <Typography variant="soft">Front End Developer</Typography>
              </Stack>
              <Stack direction="row" spacing={3}>
                <Stack spacing={1}>
                  <FormLabel>Employer</FormLabel>
                  <Typography variant="soft">Australian Government</Typography>
                </Stack>
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                  <FormLabel>Location</FormLabel>
                  <Typography variant="soft">Canberra, Australia</Typography>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <FormLabel>Tech stack</FormLabel>
                <Stack direction="row" spacing={1}>
                  <Chip
                    startDecorator={<FaReact />}
                    component="a" //shows link on bottom of page on hover
                    href="https://react.dev/"
                    target="_blank" //opens in new tab
                    rel="noopener noreferrer" //adds security when opening new link
                    onClick={() => null} //adds onHover effect
                    size="md"
                  >
                    React
                  </Chip>
                  <Chip
                    startDecorator={<SiTypescript />}
                    component="a"
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => null}
                    size="md"
                  >
                    Typescript
                  </Chip>
                  <Chip
                    startDecorator={<SiMui />}
                    component="a"
                    href="https://mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => null}
                    size="md"
                  >
                    Material UI
                  </Chip>
                  <Chip
                    startDecorator={<BiLogoSpringBoot />}
                    component="a"
                    href="https://spring.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => null}
                    size="md"
                  >
                    Java Spring
                  </Chip>
                  <Chip
                    startDecorator={<GrOracle />}
                    component="a"
                    href="https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Introduction-to-Oracle-SQL.html#GUID-049B7AE8-11E1-4110-B3E4-D117907D77AC"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => null}
                    size="md"
                  >
                    Oracle SQL
                  </Chip>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column">
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </Stack>
              <Stack direction="column" gap={1} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Role</FormLabel>
                  <Typography variant="soft">Front End Developer</Typography>
                </Stack>
                <Stack spacing={1}>
                  <FormLabel>Employer</FormLabel>
                  <Typography variant="soft">Australian Government</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <FormLabel>Location</FormLabel>
              <Typography variant="soft">Canberra, Australia</Typography>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Tech stack</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  startDecorator={<FaReact />}
                  component="a" //shows link on bottom of page on hover
                  href="https://react.dev/"
                  target="_blank" //opens in new tab
                  rel="noopener noreferrer" //adds security when opening new link
                  onClick={() => null} //adds onHover effect
                  size="md"
                >
                  React
                </Chip>
                <Chip
                  startDecorator={<SiTypescript />}
                  component="a"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Typescript
                </Chip>
                <Chip
                  startDecorator={<SiMui />}
                  component="a"
                  href="https://mui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Material UI
                </Chip>
                <Chip
                  startDecorator={<BiLogoSpringBoot />}
                  component="a"
                  href="https://spring.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Java Spring
                </Chip>
              </Stack>
              <Chip
                startDecorator={<GrOracle />}
                component="a"
                href="https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Introduction-to-Oracle-SQL.html#GUID-049B7AE8-11E1-4110-B3E4-D117907D77AC"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => null}
                size="md"
              >
                Oracle SQL
              </Chip>
            </Stack>
          </Stack>
          <CardOverflow
            sx={{
              borderTop: "1px solid",
            }}
          ></CardOverflow>
        </Card>
        <Card ref={resumeRef}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Resume</Typography>
            <Typography level="body-sm">
              My work experience and education
            </Typography>
          </Box>
          <Divider />
          <ResumeTimeline />
          <CardOverflow
            sx={{
              borderTop: "1px solid",
            }}
          ></CardOverflow>
        </Card>
        <Card ref={projectsRef}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Projects</Typography>
            <Typography level="body-sm">
              Personal projects I've worked on
            </Typography>
          </Box>
          <Divider />
          <Stack sx={{ my: 3, mx: 5 }}>
            <ProjectCard
              title="Portfolio"
              description="A showcase of my dev journey"
              src=""
              srcSet=""
              year={2023}
              type="Website"
              tech={["React", "Joy UI", "Typescript", "Vite", "Github Pages"]}
              links={{
                goto: "https://richardcong.com",
                source: "https://github.com/richcong/richcong.github.io",
              }}
            />
          </Stack>
          <CardOverflow
            sx={{
              borderTop: "1px solid",
            }}
          ></CardOverflow>
        </Card>
        <Card ref={hobbiesRef}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Hobbies</Typography>
            <Typography level="body-sm">
              Share a few snippets of your work.
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}></Stack>
          <CardOverflow
            sx={{
              borderTop: "1px solid",
            }}
          ></CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}
