import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {BasicPopover} from "./displayhrs/DisplayHrs";
import { TodayButton } from "./todayButton/todayButton";
import {DisplayDate} from "./displayDate/displayDate";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainDrawer from "./Drawer/Drawer";
import {ArrowsButtons} from "./ArrowsNav/Arrows";
import { WeekMonthButtons } from "./weekMonthButton/WeekMonthButton";
import {FC} from "react";
import {hrsT} from "../data/hours";
import {dates} from "../data/dates";
import { ImageAvatars } from "./profile/Profile";
export interface AppbarProps{
  matchesSM: boolean;
}

const ResponsiveAppBar: FC<AppbarProps> = ({matchesSM}) => {

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

          {matchesSM ? (
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
                <ArrowsButtons  onClick={()=>console.log("moved")} size="small" color="secondary"/>
              </Box>
              <DisplayDate dates={dates} data-testid={"displayDate"} />
              <BasicPopover hours={hrsT} />
              <WeekMonthButtons
              onClickM={() => {
                console.log("Month was clicked!");
              }}
              onClickW={() => {
                console.log("Week was clicked!");
              }}
              box="contained"
              size="small"
              />

              <ImageAvatars name="DL" />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
