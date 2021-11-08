import React ,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';
// import UserRole from './UserRole';
// import AppSys from '../Layout/AppSys';

const AddUser = props => {

    const [enteredName,setEnteredName] = useState('');
    const [ageName,setAgeName] = useState('');
    const [errorInp,setErrorInp] = useState('');
    const [found,setFound] = useState();
    const [inout,setInout] = useState();

    const onLoginHandler = (event)=>{
        event.preventDefault();
        console.log(enteredName);
        let index = props.users.indexOf(props.users.find(user=>user.name===enteredName));
        console.log(index);
        props.userIn(enteredName);
        props.users.find(user=>user.name===enteredName)!==undefined?props.success(props.users[index].role.length,props.users[index]):props.success(2);
        setEnteredName('');
        setInout(1);
    }

    const onLogoutHandler = () =>{
        props.success(0)
        props.userIn('');
        setInout();
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        console.log(enteredName.trim().length);
        
        if(enteredName.trim().length === 0 || ageName.trim().length === 0 ){
            setErrorInp({
                title:'An error as occure',
                message:'There is no input inside.Please Enter'
            })
            return;
        }
        
        //(+) unary operator near ageName convert the stored as char into a number 
        if(+ageName < 1){
            setErrorInp({
                title:'An error as occure',
                message:'Negative age is not allowed'
            });
            return;
        }
        

        props.AddUser(enteredName,ageName);
        console.log(enteredName,ageName);
        // enteredName = '';
        setEnteredName('');
        console.log(enteredName);
        setAgeName('');
    }

    const onCangeUserHandler = (event) =>{
        setEnteredName(event.target.value);
        console.log(event.target.value);
        console.log(props.users);
        console.log(props.users.indexOf(event.target.value));
        
        if(props.users.find(user=>user.name===event.target.value)!==undefined){
            setFound(1);
        }
        else{
            setFound();
        }
        
    }

    // const onCangeAgeHandler = (event) =>{
    //     setAgeName(event.target.value);    
    // }

    const onClickErrorHandler = (err) =>{
        setErrorInp(err);
    }

    const onClickErrorNullHandler = () =>{
        setErrorInp(null);
    }

    return (
        <div>
            {errorInp&&<ErrorModel title={errorInp.title} message={errorInp.message} onClickError={onClickErrorHandler} onConfirm={onClickErrorNullHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="user">User</label>
                    <input id="user" type="text" onChange={onCangeUserHandler} value={enteredName}></input>
                    {/* <label htmlFor="age">Age (Year)</label>
                    <input id="age" type="text" onChange={onCangeAgeHandler} value={ageName}></input> */}
                    <Button type="submit" onClick={addUserHandler} found={found}>Register</Button>
                    {found&&<Button type="submit" onClick={onLoginHandler}>LogIn</Button>}
                    {inout&&<Button onClick={onLogoutHandler}>LogOut</Button>}
                </form>
            </Card>
        </div>
    
    )
}

export default AddUser ;