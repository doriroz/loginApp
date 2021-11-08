import React ,{useState} from "react";
import classes from './Menu.module.css';
// import Card from '../UI/Card';
import AppSys from "../Layout/AppSys";
import Button from "./Button";

const Menu = (props) =>{

    const [checked,setChecked] = useState();
    const [role,setRole] = useState();

    const onClickHandler = () =>{
        console.log(checked);
        setRole(1);
        // return checked&&<AppSys />
    }

    const onCheckedHandler = () =>{
        console.log("ddd");
        setChecked(1);
    }
 
    const onOpenMenu = () =>{

    }
    
    return <div>
        <div className={classes.menu}>
            <p>Choose your role:</p>
            <ul>
                {props.roleList.map((role,ind)=>{
                    console.log(role);
                    return(<li key={ind}><input type="radio" name="radio" onChange={onCheckedHandler}/>{role}</li>)
                })}
            </ul>
            
            <Button onClick={onClickHandler}>Open</Button>
        </div>
        {/* {checked&&<div>dddd</div>} */}
        {checked&&<AppSys role={role}/>}
        
    </div>
    }

export default Menu;

