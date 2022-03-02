import React from "react"

const NewMessage = (props) => {
    const dispatch = props.dispatch
    let message = React.createRef()
  
    const addMessage = () => {
        dispatch({type: 'ADD-MESSAGE', id: props.dialogId, user_id: props.user.user_id, text: message.current.value})
        message.current.value = ''
    };
    
    return (
        <div className="input-group">
            <textarea ref={message} className="form-control" aria-label="With textarea"></textarea>
            <span className="input-group-text" onClick={addMessage}>Отправить</span>
        </div>
    )
}


export default NewMessage