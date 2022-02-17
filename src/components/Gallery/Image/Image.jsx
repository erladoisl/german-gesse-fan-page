import c from './Image.module.css'

const Image = (props) => {
    return (
        <div className={c.paint}>
            <img className={c.paint} src={props.src} alt={props.src}/>
        </div>
    );
}

export default Image 