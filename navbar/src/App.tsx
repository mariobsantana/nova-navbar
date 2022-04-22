import './App.css';
import RouteA from './microcomponent/ArrowsNav/Routes/RouteA';
import RouteB from './microcomponent/ArrowsNav/Routes/RouteB';
import Appbar from './microcomponent/Appbar';
import { Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Appbar/>} />
        <Route path="routeA" element={<RouteA />} />
        <Route path="routeB" element={<RouteB />} />
      </Routes>
    </div>
  );
}
