import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

   return (
      <BrowserRouter>
      <Routes>
         
       <Route path="/Datafetch" element={<Backend />}>            
           <Route index element={<Datafetch />} />
        </Route> 


        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<Backend />}>
           <Route index element={<Admin />} />        
        </Route>

        <Route path="/calendar" element={<Backend />}>
           <Route index element={<Calendar />} />        
        </Route>
        
        

        {/* <Route path="/schedule/:info" element={<Backend />}>
        <Route  component={Schedule}></Route>       
        </Route> */}


        <Route path="/schedule" element={<Backend />}>
           <Route index element={<Schedule />} />        
        </Route>

        <Route path="/Physicians" element={<Backend />}>            
           <Route index element={<Physicians />} />
        </Route>

        <Route path="/profile" element={<Backend />}>            
           <Route index element={<Profile />} />
        </Route>

        <Route path="/notification" element={<Backend />}>            
           <Route index element={<Notification />} />
        </Route>

        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>       
   );
}

ReactDOM.render(<App />, document.getElementById("root"));