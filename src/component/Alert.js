import React from 'react'
export default function Alert(props) {
    return (
        <div style={{height:20,marginBottom:50}}>

    {props.alert && <div className={`alert alert-${props.alert.type}`}  role="alert">
          <strong>{props.alert.message}</strong>
    </div>}
        </div>
    )
}
