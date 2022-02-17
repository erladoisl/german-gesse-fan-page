import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  const chats = [
  {'user_id': 0, 'name': 'Дима', 
   'messages': [{'user_id': 0, 'text': 'Привет, это Дима, я хотел у тебя спросить по поводу поездки на Камское. В какие даты ты собираешься?', 'data': '12.01.2022'},
                {'user_id': 1, 'text': 'Привет, я собираюсь в начале мая только. Ты тоже хочешь присоединиться?', 'data': '12.01.2022'},
                {'user_id': 0, 'text': 'Я думаю пока, потому что я только недавно устроился на работу. Не факт, что удастся отпроситься...', 'data': '12.01.2022'},
                {'user_id': 1, 'text': 'Хорошо, буду рада видеть тебя)', 'data': '12.01.2022'},
                {'user_id': 0, 'text': 'Благодарю.. А так мне очень хочется :)', 'data': '12.01.2022'}]}, 
  {'user_id': 2, 'name': 'Андрей', 
   'messages': [{'user_id': 1, 'text': 'Давай)', 'data': '12.01.2022'}]}, 
  {'user_id': 3, 'name': 'Раиля', 
   'messages': [{'user_id': 3, 'text': 'Хорошо, но если заметишь какие-нибудь ошибки, сразу мне говори)', 'data': '12.01.2022'}]}, 
  {'user_id': 4, 'name': 'Алиса', 
   'messages': [{'user_id': 4, 'text': 'С минэкономикой совещание. Есть новости по поводу моделей?', 'data': '12.01.2022'}]}, 
  {'user_id': 5, 'name': 'Максим', 
   'messages': [{'user_id': 1, 'text': 'Не забудь прислать файлы, очень интересно', 'data': '12.01.2022'}]}, 
  {'user_id': 6, 'name': 'Денис', 
  'messages': [{'user_id': 1, 'text': 'Купи зелень и сыр, пожалуйста', 'data': '12.01.2022'}]}]
  
  const cur_chat_id = props.chat_id | 0
  const cur_user = {'user_id': 1, 'name': 'Рахина'}

  return (
    <div className="bg-dark text-white container">
      <div className='row' >
        <div className="scroll col-3 bg-white">
          <div className="d-flex p-3 link-dark border-bottom">
            <span className="fs-5 fw-semibold">Чаты:</span>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {chats.map((chat, index) => {
              return (
                <Dialog dialogId = {index}
                         author = {chat.name}
                         data = {chat.messages[chat.messages.length - 1].data}
                         text = {chat.messages[chat.messages.length - 1].text} />
              )
            })}
          </div>
        </div>
        <div className="scroll col-9 bg-white">
          <div className="d-flex p-3 link-dark border-bottom">
            <span className="fs-5 fw-semibold">{chats[cur_chat_id].name}</span>
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {chats[cur_chat_id].messages.map((message) => {
              return (
                <Message dialogId = {cur_chat_id}
                         author = {(message.user_id === cur_user.user_id) ? cur_user.name : chats[cur_chat_id].name}
                         data = {message.data} text = {message.text}
                         right = {message.user_id === cur_user.user_id} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;