import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frontend from "./components/fronend/Frontend";
import Backend from "./components/backend/Backend";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Physicians from "./components/Physicians";
import NoPage from "./components/NoPage";
import Calendar from "./components/Calendar";
import Schedule from "./components/Schedule";
import Datafetch from "./components/Datafetch";


export default function App() {
  const isLoggedIn =  localStorage.getItem('access_token') != null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Frontend/> : <Navigate to='/calendar'/>}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/Datafetch" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>            
           <Route index element={<Datafetch />} />
        </Route>
        <Route path="/admin" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>
           <Route index element={<Admin />} />        
        </Route>
        <Route path="/calendar" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>
           <Route index element={<Calendar />} />        
        </Route>
        {/* <Route path="/schedule/:info" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>
        <Route  component={Schedule}></Route>       
        </Route> */}
        <Route path="/schedule" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>
           <Route index element={<Schedule />} />        
        </Route>
        <Route path="/Physicians" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>            
           <Route index element={<Physicians />} />
        </Route>
        <Route path="/profile" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>            
           <Route index element={<Profile />} />
        </Route>
        <Route path="/notification" element={isLoggedIn ? <Backend/> : <Navigate to='/'/>}>            
           <Route index element={<Notification />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>       
  );
}

ReactDOM.render(<App />, document.getElementById("root"));