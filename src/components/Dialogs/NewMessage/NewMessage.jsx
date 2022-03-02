import React from "react"

const NewMessage = (props) => {
    const dispatch = props.dispatch
    debugger
    let message = React.createRef()
  
    const addMessage = () => {
        console.log(props.dialogId)
        console.log(props.user.user_id)
        console.log(message.current.value)
        console.log('in component')
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