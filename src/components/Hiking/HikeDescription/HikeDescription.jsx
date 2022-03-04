const HikeDescription = (props) => {
    let hike = props.hike

    const selectHike = () => {
        props.dispatch({type: 'SELECT-HIKE', hike_id: props.hike_id})
    }

    return (
        <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>{hike.name}</h2>
            <p>{hike.description}</p>
            <p className="btn btn-secondary" onClick={selectHike}>Подробнее »</p>
        </div>
    )
}

export default HikeDescription