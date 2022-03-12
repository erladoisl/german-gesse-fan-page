import React from "react"
import { addMessageCreator, updateNewMessageCreator } from "../../../redux/dialogs-reducer";

const NewMessage = (props) => {
    const dispatch = props.dispatch
    let message = React.createRef()

    const addMessage = () => {
        dispatch(addMessageCreator(props.dialogId));
        message.current.value = '';
    };

    const updateNewMessage = () => {
        dispatch(updateNewMessageCreator(props.dialogId, props.user.user_id, message.current.value));
    };

    return (
        <div className="input-group">
            <textarea ref={message} className="form-control" aria-label="With textarea" onChange={updateNewMessage} value={props.text}></textarea>
            <span className="input-group-text" onClick={addMessage}>Отправить</span>
        </div>
    )
}


export default NewMessage