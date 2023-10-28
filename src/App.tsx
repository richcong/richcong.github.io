import { Box, CssBaseline } from "@mui/joy";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import {
  THEME_ID as MATERIAL_THEME_ID,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as materialExtendTheme,
} from "@mui/material/styles";
import { useRef } from "react";
import Header from "./components/Header";
import MyProfile from "./components/MyProfile";

const materialTheme = materialExtendTheme();

function App() {
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider disableTransitionOnChange defaultMode="dark">
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Header
              resumeRef={resumeRef}
              projectsRef={projectsRef}
              skillsRef={skillsRef}
            />
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
              <MyProfile
                resumeRef={resumeRef}
                projectsRef={projectsRef}
                skillsRef={skillsRef}
              />
            </Box>
          </Box>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </>
  );
}

export default App;
