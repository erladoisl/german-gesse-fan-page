import Menu from "../Menu/Menu";

const HikeDay = (props) => {
    let { calc_types, dispatch, day } = props;

    return (
        <div className="row"> {/* день похода */}
            <div className="row"> {/* название, описание дня похода */}
                <div className="pricing-header p-3 pb-md-4 mx-auto text-white">
                    <h1 className="fs-5 fw-normal"> {day.name} ({day.date.toLocaleDateString()})</h1>
                    <p className="fs-6 text-muted"> {day.description} </p>
                </div>
            </div>
            <div className="row"> {/* приемы пищи */}
                {Object.keys(day.eatings).map((eating_id) => {
                    return <Menu key={eating_id} eating={day.eatings[eating_id]} calc_types={calc_types} dispatch={dispatch} />
                })}
            </div>
        </div>
    );
};

export default HikeDay;