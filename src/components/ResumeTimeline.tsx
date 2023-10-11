import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/joy/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, { timelineOppositeContentClasses} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import "../css/common/List.css";

export default function ResumeTimeline() {
  return (
    <Timeline  sx={{
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0,
      },
    }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
    
        >
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <AccountBalanceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography level="title-md" component="span">
            Australian Government
          </Typography>
          <Typography>Front End Developer</Typography>
          <Typography level="body-sm">
            <ul>
              <li>Developed an internal web-based React app from scratch</li>
              <li>Led the bug fix effort on the front end</li>
              <li>
                Utilised REST APIs to display data from the backend to the front
              </li>
              <li>Experienced Agile practitioner</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography level="title-md" component="span">
            Australian National University
          </Typography>
          <Typography>Bachelor of IT</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
       
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ConstructionIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography level="title-md" component="span">
            Deloitte
          </Typography>
          <Typography>Platform Engineering Internship</Typography>
          <Typography level="body-sm">
            <ul>
              <li>
                Used Mulesoft to retrieve data from databases and display data
                front end
              </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
