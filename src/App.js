import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import dev from "./image/dev.png";

const handleName = (name) => {
  alert(`Hello your name is `+name);
};
const bio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia turpis in  condimentum sem, per inceptos himenaeos.";
const style = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  marginTop: "5%",
  objectFit: "cover",
  objectPosition: "0 -8px",
 
};

function App() {
  return (
    <React.Fragment>
      <Profile
        fullName="Sana Moumni"
        bio={bio}
        profession="fullStack js"
        handleName={handleName}
      >
        <img src={dev} alt="logo" style={style} />
      </Profile>
      </React.Fragment>
    
  );
}

export default App;