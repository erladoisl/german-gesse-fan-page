import c from './Author.module.css'


const Author = (props) => {
    return (
        <>
            <div className={c.avatar + ' row rounded'}>
                <img src={props.ava_url} alt="author's avatar"/>
            </div>
            <div className={c.name + ' row'}>
                <div className='col-auto mx-auto'>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default Author 