import React from "react";
// import Card from "../UI/Card";
import classes from "./AppSys.module.css";

const AppSys = (props) =>{

    const openPage = () =>{
        console.log(props.role);
        return props.role===1?
        <div className={classes.appSys}>
            <h1>Welcome to our new Application</h1>
        </div>:
        <div></div>   
    }
    
    return (<div>{openPage()}</div>
    )
}

export default AppSys;