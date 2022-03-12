const Header = (props) => {
    const from = props.hike.days[0].date.toLocaleDateString();
    const to = Object.keys(props.hike.days).length > 1 ? props.hike.days[Object.keys(props.hike.days).length - 1].date.toLocaleDateString() : from;

    return (
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center text-white">
            <h1 className="display-4 fw-normal"> {props.hike.name} </h1>
            <p className="fs-5 text-muted"> {props.hike.description} </p>
            <p className="fs-5 text-muted"> Количество участников: {props.hike.participant_count} </p>
            <p className="fs-5 text-muted"> С {from} по {to} </p>
        </div>
    );
};

export default Header;