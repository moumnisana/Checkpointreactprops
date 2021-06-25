import Proptypes from 'prop-types'


const Profile = (props) => {
  const {
    fullName = "user name",
    bio = "bio of the user ",
    profession = "profession of the user",
    handleName,
    children = "photo of the user",
  } = props;

  return (
    <div className="card" >
      <div className="avatar">
      {children}
      </div>
      <div className="contente" style={{padding:"20px"}}>
      <h1 style={{color:"wheat"}}>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
      </div>
      
      <button onClick={handleName ? () => handleName(fullName):()=>alert("no function")}>Contact me</button>
    </div>
  );
};

Profile.propTypes={
  fullName:Proptypes.string,
  bio:Proptypes.string,
  profession:Proptypes.string,
  handleName:Proptypes.func,
  children:Proptypes.element
}


export default Profile;