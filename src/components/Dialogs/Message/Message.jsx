import c from './Message.module.css'

const Message = (props) => {
  return (
      <div className={`${props.right ? c.right : c.left} ${c[props.class]} list-group-item list-group-item-action py-3 lh-tight`} aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{props.author}</strong>
          <small className="text-muted">{props.data}</small>
        </div>
        <div className="col-10 mb-1 small">{props.text}</div>
      </div>
  )
}

export default Message;