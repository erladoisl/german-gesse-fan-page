import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { useLocation } from 'react-router-dom'

const Dialogs = (props) => {
  const location = useLocation()
  const dialogId = location.state ? location.state.dialogId : 0
  // console.log(dialogId)

  return (
    <div className="bg-dark text-white container">
      <div className='row' >
        <div className="scroll col-3 bg-white">
          <div className="d-flex p-3 link-dark border-bottom">
            <span className="fs-5 fw-semibold">Чаты:</span>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {props.chats.map((chat, index) => {
              return (
                <Dialog dialogId={index}
                  author={chat.name}
                  data={chat.messages[chat.messages.length - 1].data}
                  text={chat.messages[chat.messages.length - 1].text}
                  key={`message_${index}`} />
              )
            })}
          </div>
        </div>
        <div className="scroll col-9 bg-white">
          <div className="d-flex p-3 link-dark border-bottom">
            <span className="fs-5 fw-semibold">{props.chats[dialogId].name}</span>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {props.chats[dialogId].messages.map((message, index) => {
              return (
                <Message dialogId={dialogId}
                  author={(message.user_id === props.user.user_id) ? props.user.name : props.chats[dialogId].name}
                  data={message.data} text={message.text}
                  right={message.user_id === props.user.user_id}
                  key={`message_${index}`} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;