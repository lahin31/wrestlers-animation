import React from 'react';
import "./user.scss";

const User = props => {
    const goToUser = id => props.handleDetails(id);
    return (
        <div className="user-wrapper" style={props.style}>
            <div className="user-card">
                <div className="user-img">
                    <img 
                        src={props.getDetails('imgUrl')(props.user.details)} 
                        alt=""
                        onClick={()=>goToUser(props.user.id)}/>
                </div>
            </div>
            <h3>{props.user.name}</h3> 
        </div>
    )
}

export default User;