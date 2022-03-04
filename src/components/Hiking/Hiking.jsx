import HikeDescription from "./HikeDescription/HikeDescription";
import HikeEntry from "./HikeEntry/HikeEntry";

const Hiking = (props) => {
    const cur_hike_id = props.content.selected_hike_id
    
    const regect_selected_hike = () => {
        props.dispatch({type: 'SELECT-HIKE', hike_id: -1})
    }

    if (cur_hike_id === -1) {
        console.log('Opened all hikes page')
        return (
            <div className="row leaf text">
                {Object.keys(props.content.hikes).map((hike_id) => {
                    return (
                        <HikeDescription key={`hike_${hike_id}`} hike_id={hike_id} hike={props.content.hikes[hike_id]} dispatch={props.dispatch} />
                    )
                })}
            </div>
        );
    } else {
        console.log(`Opened ${cur_hike_id}'d hike page`)
        return (
            <div>
                <p className="btn btn-secondary" onClick={regect_selected_hike}>« назад</p>
                <HikeEntry hike={props.content.hikes[cur_hike_id]} calc_types={props.content.calc_types} dispatch={props.dispatch}/>
            </div>
        )
    }
}

export default Hiking