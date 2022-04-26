import './App.css';
import Appbar from './microcomponent/Appbar';
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";


export default function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
        <Appbar matchesSM={matches}/>
    </div>
  );
}
