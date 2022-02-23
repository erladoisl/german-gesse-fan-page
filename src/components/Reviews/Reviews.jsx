import Review from "./Review/Review";
import c from './Reviews.module.css'

const Reviews = (props) => {
    return (
        <div className="bg-dark text-white">
            <h3 className={c.center}>Все рецензии:</h3>

            {props.reviews.map((r, index) => {
                return (
                    <Review message={r.message}
                        name={r.name}
                        stars={r.stars}
                        title={r.title}
                        ava_url={r.ava_url}
                        key={index}/>)
            })}
        </div>
    );
}

export default Reviews 