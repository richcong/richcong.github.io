import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ButtonGroup, CardActions, Stack } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

type ProjectCardProps = {
  title: string;
  description: string;
  src: string;
  srcSet: string;
  year: number;
  type: string;
  tech: string[];
  links: { goto: string; source: string };
};

export default function ProjectCard({
  title,
  description,
  src,
  srcSet,
  year,
  type,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <Card sx={{ maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio objectFit="contain" sx={{ minWidth: 100 }}>
          <img src={src} srcSet={srcSet} loading="lazy" alt={title} />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{year}</Typography>
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              {type}
            </Chip>
          }
        >
          {title}
        </Typography>
        <Typography level="body-sm" sx={{ mb: 1 }}>
          {description}
        </Typography>
        {/* Computer view --------------------------------------------------------- */}
        {tech.length <= 6 && (
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {tech.map((tech) => (
              <Chip size="md">{tech}</Chip>
            ))}
          </Stack>
        )}
        {tech.length > 6 && (
          <>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {tech.slice(0, 6).map((tech) => (
                <Chip size="md">{tech}</Chip>
              ))}
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {tech.slice(6, tech.length).map((tech) => (
                <Chip size="md">{tech}</Chip>
              ))}
            </Stack>
          </>
        )}
        {/* Mobile view --------------------------------------------------------- */}
        {tech.length <= 3 && (
          <Stack direction="row" spacing={1} sx={{ display: { md: "none" } }}>
            {tech.map((tech) => (
              <Chip size="md">{tech}</Chip>
            ))}
          </Stack>
        )}
        {tech.length > 3 && tech.length <= 6 && (
          <>
            <Stack direction="row" spacing={1} sx={{ display: { md: "none" } }}>
              {tech.slice(0, 3).map((tech) => (
                <Chip size="md">{tech}</Chip>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} sx={{ display: { md: "none" } }}>
              {tech.slice(3, tech.length).map((tech) => (
                <Chip size="md">{tech}</Chip>
              ))}
            </Stack>
          </>
        )}
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button
              component="a"
              href={links.goto}
              target="_blank"
              rel="noopener noreferrer"
              endDecorator={<ExitToAppIcon />}
            >
              Go to
            </Button>
            <Button
              component="a"
              href={links.source}
              target="_blank"
              rel="noopener noreferrer"
              endDecorator={<GitHubIcon />}
            >
              Source code
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
