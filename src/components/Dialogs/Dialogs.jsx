import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
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
                  key ={`message_${index}`}/>
              )
            })}
          </div>
        </div>
        <div className="scroll col-9 bg-white">
          <div className="d-flex p-3 link-dark border-bottom">
            <span className="fs-5 fw-semibold">{props.chats[props.cur_chat_id].name}</span>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {props.chats[props.cur_chat_id].messages.map((message, index) => {
              return (
                <Message dialogId={props.cur_chat_id}
                  author={(message.user_id === props.user.user_id) ? props.user.name : props.chats[props.cur_chat_id].name}
                  data={message.data} text={message.text}
                  right={message.user_id === props.user.user_id} 
                  key ={`message_${index}`}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;