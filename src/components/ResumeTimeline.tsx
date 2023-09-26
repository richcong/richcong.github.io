import FastfoodIcon from "@mui/icons-material/Fastfood";
import HotelIcon from "@mui/icons-material/Hotel";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import "../css/common/List.css";

export default function ResumeTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          style={{ flex: 0.1 }}
        >
          Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Australian Government
          </Typography>
          <Typography>Front End Developer</Typography>
          <Typography variant="caption">
            <ul>
              <li>Developing a web-based React app from scratch</li>
              <li>Leads the bug fix effort on the front end</li>
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
          style={{ flex: 0.1 }}
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
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
          style={{ flex: 0.1 }}
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Deloitte
          </Typography>
          <Typography>Internship</Typography>
          <Typography variant="caption">
            <ul>
              <li>
                Used Mulesoft to connect to databases and display data front end
              </li>
              <li>
                Optimised Mulesoft configurations to speed up connection times
                by 50%
              </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
