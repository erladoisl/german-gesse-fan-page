import c from './Field.module.css'

const Field = (props) => {
    const { col, type, invalidFeedback, description, placeholder, ref} = props.state

    return (
        <div className={`col-sm-${col}`}>
            <label className="form-label">{description}</label>
            {renderSwitchNode(type, placeholder, ref)}
            <div className="invalid-feedback" >
                {invalidFeedback}
            </div>
        </div>
    )
}

const renderSwitchNode = function (type, placeholder, ref) {
    switch (type) {
        case 'text':
            return <input ref={ref} type="text" className="form-control" placeholder={`${placeholder}`} defaultValue="" required="" />;
        case 'textarea':
            return <textarea ref={ref} type="textarea" className={`${c.review_field} form-control`} id="firstName" placeholder="" defaultValue="" required="" />;
        default:
            return <></>
    }
}

export default Field