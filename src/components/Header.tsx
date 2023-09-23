import { Box, Tab, TabList, Tabs, Typography, tabClasses } from "@mui/joy";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import ColorSchemeToggle from "./ColorSchemeToggle";

export default function Header() {
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
            ml: -17, //Brings the header to the left in line with the main content
            fontWeight: "600",
          }}
        >
          Richard Cong
        </Typography>
      </Box>
      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: "transparent",
        }}
      >
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            justifyContent: "left",
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              bgcolor: "transparent",
              [`&.${tabClasses.selected}`]: {
                fontWeight: "600",
                "&::after": {
                  height: "2px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
            Bio
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
            Resume
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={2}>
            Portfolio
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={3}>
            Hobbies
          </Tab>
        </TabList>
      </Tabs>
      <Box sx={{ ml: 3 }}></Box>
      <ColorSchemeToggle />
    </Sheet>
  );
}
