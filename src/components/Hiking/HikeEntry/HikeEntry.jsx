import Header from "./Header/Header"
import HikeDay from "./HikeDay/HikeDay"

const HikeEntry = (props) => {
    let {calc_types, hike, dispatch} = props;

    return (
        <div>
            <Header hike={hike} />
            <div className="row text-white">
                {Object.keys(hike.days).map((day_id) => {
                    return <HikeDay key={day_id} day={hike.days[day_id]} calc_types={calc_types} dispatch={dispatch}/>
                })}
            </div>
        </div>
    )
}

export default HikeEntry