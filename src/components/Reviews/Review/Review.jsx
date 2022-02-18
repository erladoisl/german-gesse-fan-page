import Author from './Author/Author';
import c from './Review.module.css'
import Star from './Star/Star';
import Title from './Title/Title';

const Review = (props) => {
    return (
        <div className={c.review + ' container'}>
            <div className='row'>
                <div className={`${c.user_info} col-2`}>
                    <Author ava_url={props.ava_url} name={props.name} />
                    <Title title={props.title} />

                    <div className='row mx-auto'>
                        {[...Array(Number(props.stars)).keys()].map((item, index) => {
                            return <Star key ={`message_${index}`}/>
                        })}
                    </div>
                </div>
                <div className={c.text + ' col'}>
                    {props.message}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Review 