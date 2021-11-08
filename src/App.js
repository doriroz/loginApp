import React ,{useState}from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
// import UserRole from './components/User/UserRole';
// import AppSys from './components/Layout/AppSys';
import Menu from './components/UI/Menu';
import AppSys from './components/Layout/AppSys';
// import Card from '../components/UI/Card';

function App() {
  const [role,setRole] = useState();
  const [userName,setUserName] = useState('');
  const [userList,setUserList] = useState([{
    name:"dori",
    role:['ADM','WRK']
  },
  {
    name:"shiri",
    role:['WRK']
  },
  {
    name:"rami",
    role:['WRK']
  }
]);


const onSuccessLogin = (roleLen,user)=>{
  console.log(roleLen); 
  setRole(roleLen);

}

  
const addUserHandler = (uName,uRole) => {
  console.log(uName);
  setUserList((prevList)=>{
    return [...prevList,{user:uName,role:uRole}];
  })  
}

const checkForApp = ()=>{
  console.log(role);
  return role>1?<Menu roleList={userList[0].role} />:<AppSys role={role}/>;
}

const onUserInHandler = (user) =>{
    setUserName(user);   
}

const userCss = {
    width:"20rem",
    margin:"0 auto"
}

  return (
    <div>
      <AddUser AddUser={addUserHandler} users={userList} success={onSuccessLogin} userIn={onUserInHandler}/>
      <UsersList users={userList}/>
      {userName&&<h3 style={userCss}>{`User Name: ${userName}`}</h3>}
      {checkForApp()}
    </div>
  );
}

export default App;
