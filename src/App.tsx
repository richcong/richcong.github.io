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
  const bioRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbiesRef = useRef(null);

  return (
    <>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider disableTransitionOnChange>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Header
              bioRef={bioRef}
              resumeRef={resumeRef}
              projectsRef={projectsRef}
              hobbiesRef={hobbiesRef}
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
                bioRef={bioRef}
                resumeRef={resumeRef}
                projectsRef={projectsRef}
                hobbiesRef={hobbiesRef}
              />
            </Box>
          </Box>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </>
  );
}

export default App;
