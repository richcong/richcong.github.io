import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import Header from "./components/Header";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Header />
          <Box
            component="main"
            className="MainContent"
            sx={{
              pt: {
                xs: "calc(15px + var(--Header-height))",
                md: 7,
              },
              pb: {
                xs: 2,
                sm: 2,
                md: 3,
              },
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              height: "100dvh",
              gap: 1,
              overflow: "auto",
            }}
          >
            <MyProfile />
          </Box>
        </Box>
      </CssVarsProvider>
    </>
  );
}

export default App;
