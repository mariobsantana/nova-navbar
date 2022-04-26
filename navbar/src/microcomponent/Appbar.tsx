import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BasicPopover from "./displayhrs/DisplayHrs";
import { TodayButton } from "./todayButton/todayButton";
import WeekMonthButton from "./weekMonthButton/WeekMonthButton";
import ArrowsButtons from "../microcomponent/Arrows Nav/Arrows";
import DisplayDate from "./displayDate/displayDate";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainDrawer from "./Drawer";
import { ImageAvatars } from "./profile/Profile";

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex", overflow: "visible" }}
          >
            NOVA
          </Typography>

          {matches ? (
            <MainDrawer />
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
              <TodayButton
                onClick={() => {
                  console.log("Today button was clicked!");
                }}
              >
                Today
              </TodayButton>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
                <ArrowsButtons />
              </Box>
              <DisplayDate />
              <BasicPopover />
              <WeekMonthButton />
              <ImageAvatars name="DL" />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
