import './App.css';
import Header from "./components/Header.jsx";
import UsersView from "./components/UsersView.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import React , {useEffect,useState} from "react";
function App() {
  const [view,setview]=useState('')

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
  return (
    <div className="App">
     <Header 
      changes={{
          changenews: changenews,
          changeprofile: changeprofile,
          changehome: changehome,
          changecontact: changecontact
        }}
      />
      <UsersView  />
      {view === "news" && <News />}
      {view === "contact" && <Contact />}
    </div>
  );
}

export default App;
