import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import c from './Dialog.module.css'


const Dialog = (props) => {
  return (
    <NavLink state={{ dialogId: props.dialogId }} to={`/dialogs/${props.dialogId}`} className={`${c[props.class]} list-group-item list-group-item-action py-3 lh-tight`}>

      <div className='row'>
        <div className='col-3 px-0'>
          <Avatar avatar_url={props.avatar_url}/>
        </div>
        <div className='col-9'>
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{props.author}</strong>
            <small className="text-muted">{props.data}</small>
          </div>

          <div className="col-10 mb-1 small">{props.text}</div>
        </div>
      </div>
    </NavLink>
  )
}

export default Dialog;