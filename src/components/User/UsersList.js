import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = (props) => {

    return <Card className={classes.users}>
    <ul>
        {props.users.map((user,ind) => {
            console.log(user);
            return <li key={ind}>
                    {/* {user.role} */}
                    {`${user.name} - User Role - ${user.role}`}
                </li>
        })}
    </ul></Card>
}

export default UsersList;