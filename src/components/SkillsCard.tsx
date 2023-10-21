import {
  Box,
  CardContent,
  CardCover,
  Divider,
  FormLabel,
  Stack,
} from "@mui/joy";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrOracle } from "react-icons/gr";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiKubernetes,
  SiMui,
  SiReact,
  SiRedhatopenshift,
  SiTypescript,
} from "react-icons/si";

type SkillsCardProps = {
  skillsRef: React.RefObject<HTMLDivElement>;
};

export default function SkillsCard({ skillsRef }: SkillsCardProps) {
  return (
    <>
      <Card
        sx={{
          m: 0,
          scrollMarginTop: "70px",
        }}
        color="primary"
        ref={skillsRef}
      >
        <CardCover></CardCover>
        {/* Computer view --------------------------------------------------------- */}
        <CardContent sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Skills</Typography>
            <Typography level="body-sm">My tech stack</Typography>
          </Box>
          <Divider />
          <Stack spacing={1}>
            <FormLabel>Front End</FormLabel>
            <Stack direction="row" spacing={1}>
              <Chip
                startDecorator={<SiReact />}
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
                startDecorator={<SiJavascript />}
                component="a"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => null}
                size="md"
              >
                Javascript
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
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Back End</FormLabel>
              <Stack direction="row" spacing={1}>
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
            <Stack spacing={1}>
              <FormLabel>DevOps</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  startDecorator={<SiDocker />}
                  component="a"
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Docker
                </Chip>
                <Chip
                  startDecorator={<SiKubernetes />}
                  component="a"
                  href="https://kubernetes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Kubernetes
                </Chip>
                <Chip
                  startDecorator={<SiRedhatopenshift />}
                  component="a"
                  href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  OpenShift
                </Chip>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Cloud</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip size="md">...</Chip>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Project Management</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  component="a"
                  href="https://www.atlassian.com/agile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Agile
                </Chip>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Others</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  startDecorator={<SiGit />}
                  component="a"
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Git
                </Chip>
                <Chip size="md">Testing</Chip>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
        {/* Mobile view --------------------------------------------------------- */}
        <CardContent sx={{ display: { xs: "flex", md: "none" } }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Skills</Typography>
            <Typography level="body-sm">My tech stack</Typography>
          </Box>
          <Divider />
          <Stack spacing={1}>
            <FormLabel>Front End</FormLabel>
            <Stack direction="row" spacing={1}>
              <Chip
                startDecorator={<SiReact />}
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
                startDecorator={<SiJavascript />}
                component="a"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => null}
                size="md"
              >
                Javascript
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
            </Stack>
            <Stack spacing={1}>
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
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Back End</FormLabel>
              <Stack direction="row" spacing={1}>
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
            <Stack spacing={1}>
              <FormLabel>DevOps</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  startDecorator={<SiDocker />}
                  component="a"
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Docker
                </Chip>
                <Chip
                  startDecorator={<SiKubernetes />}
                  component="a"
                  href="https://kubernetes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Kubernetes
                </Chip>
                <Chip
                  startDecorator={<SiRedhatopenshift />}
                  component="a"
                  href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  OpenShift
                </Chip>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Cloud</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip size="md">...</Chip>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Project Management</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  component="a"
                  href="https://www.atlassian.com/agile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Agile
                </Chip>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Others</FormLabel>
              <Stack direction="row" spacing={1}>
                <Chip
                  startDecorator={<SiGit />}
                  component="a"
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => null}
                  size="md"
                >
                  Git
                </Chip>
                <Chip size="md">Testing</Chip>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
