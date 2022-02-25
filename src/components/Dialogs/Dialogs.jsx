import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { useLocation } from 'react-router-dom'
import Avatar from './Avatar/Avatar'
import NewMessage from './NewMessage/NewMessage'
import React from 'react';

const Dialogs = (props) => {
  const { dialogs, cur_dialog_id } = props.content;
  const location = useLocation();
  const dialogId = location.state ? location.state.dialogId : 0;
  console.log(`go to ${dialogId} dialog`);


  return (
    <div className="bg-dark text-white container">
      <div className='row' >
        <div className="scroll col-3 bg-white">
          <div className="d-flex p-3 link-dark border-bottom">
            <span className="fs-5 fw-semibold">Чаты:</span>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea col">
            {Object.keys(dialogs).map((id, index) => {
              return (
                <Dialog dialogId={index}
                  author={dialogs[id].name}
                  data={dialogs[id].messages[dialogs[id].messages.length - 1].data}
                  text={dialogs[id].messages[dialogs[id].messages.length - 1].text}
                  key={`message_${index}`}
                  active={index === cur_dialog_id ? true : false}
                  avatar_url={dialogs[id].ava_url} />
              )
            })}
          </div>
        </div>
        <div className="scroll col-9 bg-white ">
          <div className="d-flex p-3 link-dark border-bottom">
            <div className='col-1 px-0'>
              <Avatar avatar_url={props.content.dialogs[dialogId].ava_url} />
            </div>
            <div className='col-9 my-auto'>
              <div className='row'>
                <span className="fs-5 fw-semibold">{props.content.dialogs[dialogId].name}</span>
              </div>
              <div className='row'>
                <span className="">{props.content.dialogs[dialogId].last_seen !== 'online' ? `Последний раз был(а): ${props.content.dialogs[dialogId].last_seen}` : 'online'}</span>
              </div>
            </div>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {props.content.dialogs[dialogId].messages.map((message, index) => {
              return (
                <Message dialogId={dialogId}
                  author={(message.user_id === props.user.user_id) ? props.user.name : props.content.dialogs[dialogId].name}
                  data={message.data} text={message.text}
                  right={message.user_id === props.user.user_id}
                  key={`message_${index}`} />
              )
            })}
            <NewMessage dialogId={dialogId} user={props.user} addMessage = {props.addMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;