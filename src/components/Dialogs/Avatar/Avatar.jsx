import c from './Avatar.module.css'

const Avatar = function (props) {
    return (
        <div className={c.avatar}>
            <img alt='user avatar' className='icon' src={props.avatar_url} />
        </div>
    )
};

export default Avatar;