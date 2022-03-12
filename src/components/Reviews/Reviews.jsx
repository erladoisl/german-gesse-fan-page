import { NavLink } from "react-router-dom";
import Review from "./Review/Review";
import c from './Reviews.module.css'

const Reviews = (props) => {
    const { reviews } = props;

    return (
        <div className="bg-dark text-white">
            <h3 className={c.center}>Все рецензии:</h3>
            <div className="row">
                <div className="col-2">
                    <NavLink to='/add_review'>
                        <button className="btn btn-primary btn-lg" >Новая рецензия</button>
                    </NavLink>
                </div>
            </div>
            {reviews.map((r, index) => {
                return (
                    <Review content={r.content}
                        name={r.name}
                        stars={r.stars}
                        title={r.title}
                        ava_url={r.ava_url}
                        key={index} />)
            })}
        </div>
    );
};

export default Reviews;