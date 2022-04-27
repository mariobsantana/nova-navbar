import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { BasicPopover } from "./displayhrs/DisplayHrs";
import { TodayButton } from "./todayButton/todayButton";
import { DisplayDate } from "./displayDate/displayDate";
import MainDrawer from "./Drawer/Drawer";
import { ArrowsButtons } from "./ArrowsNav/Arrows";
import { WeekMonthButtons } from "./weekMonthButton/WeekMonthButton";
import { FC } from "react";
import { hrsT } from "../data/hours";
import { dates } from "../data/dates";
import { ImageAvatars } from "./profile/Profile";
import { MainLogo } from "./logo/logo";
import { Grid } from "@mui/material";

export interface AppbarProps {
  matchesSM: boolean;
}

const ResponsiveAppBar: FC<AppbarProps> = ({ matchesSM }) => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Grid
          container
          spacing={2}
          alignItems="center"
          mx={2}
          justifyContent="space-between"
        >
          <Grid item>
            <MainLogo img="https://res.cloudinary.com/joeutd/image/upload/v1651004286/js-academy/itexico_s1mdee.png" />
          </Grid>

          {matchesSM ? (
            <Grid item>
              <MainDrawer />
            </Grid>
          ) : (
            <>
              <Grid item>
                <TodayButton
                  onClick={() => {
                    console.log("Today button was clicked!");
                  }}
                >
                  Today
                </TodayButton>
              </Grid>

              <Grid item>
                <ArrowsButtons
                  onClick={() => console.log("moved")}
                  size="small"
                  color="secondary"
                />
              </Grid>

              <Grid item sx={{ flexGrow: 1 }}>
                <DisplayDate dates={dates} data-testid={"displayDate"} />
              </Grid>

              <Grid item mx={1}>
                <BasicPopover hours={hrsT} />
              </Grid>

              <Grid item>
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
              </Grid>

              <Grid item>
                <ImageAvatars name="DL" />
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
