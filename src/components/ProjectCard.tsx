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
};

export default function ProjectCard({
  title,
  description,
  src,
  srcSet,
  year,
  type,
  tech,
}: ProjectCardProps) {
  return (
    <Card sx={{ width: 400, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
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
        <Stack direction="row" spacing={1}>
          {tech.map((tech) => (
            <Chip size="md">{tech}</Chip>
          ))}
        </Stack>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button>Go to</Button>
            <Button>Source code</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
