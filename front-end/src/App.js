import './App.css';
import React , {useEffect,useState} from "react";
import Header from "./components/Header.jsx";
import UsersView from "./components/UsersView.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import Profile from './components/Profile.jsx';
import Home from "./components/Home"
function App() {
  const [view,setview]=useState('')
  const [selectedUserData, setSelectedUserData] = useState(null);
 const changenews=()=> {
  setview("news")
 }
 const changeprofile=()=> {
  setview("profile")
 }
 const changehome=()=> {
  setview("home")
 }
 const changecontact=()=> {
  setview("contact")
 }
 const changeHome=()=> {
  setview("home")
 }
 const handleUserSelect = (data) => {
  setSelectedUserData(data); 
  console.log("haw mta3hum",selectedUserData)
};
  return (
    <div className="App">
     <Header 
      changes={{
          changenews: changenews,
          changeprofile: changeprofile,
          changehome: changehome,
          changecontact: changecontact,
          changeHome : changeHome
        }}
      />
      <UsersView  onUserSelect={handleUserSelect}/>
      {view === "news" && <News />}
      {view === "contact" && <Contact />}
      {view === "profile" && <Profile/>}
      {view === "home"    && <Home followed={selectedUserData}/>}
    </div>
  );
}

export default App;
