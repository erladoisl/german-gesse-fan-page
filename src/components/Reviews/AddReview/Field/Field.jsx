import c from './Field.module.css'

const Field = (props) => {
    const { col, type, invalidFeedback, description, placeholder, ref, value, key} = props.state

    return (
        <div className={`col-sm-${col}`}>
            <label className="form-label">{description}</label>
            {renderSwitchNode(type, placeholder, ref, value, key, props.updateNewReview)}
            <div className="invalid-feedback" >
                {invalidFeedback}
            </div>
        </div>
    )
}

const renderSwitchNode = function (type, placeholder, ref, value, key, updateNewReview) {
    const onFieldChange = () => {
        value = ref.current.value;
        console.log(value)
        updateNewReview(key, value)
    }
    
    switch (type) {
        case 'text':
            return <input ref={ref} type="text" className="form-control" placeholder={`${placeholder}`} defaultValue="" required="" value={value} onChange={ onFieldChange } />;
        case 'textarea':
            return (
                <textarea ref={ref} type="textarea" className={`${c.review_field} form-control`} id="firstName" placeholder="" defaultValue="" required="" value={value} onChange={ onFieldChange }>
                    {value}
                </textarea>);
        default:
            return <></>
    }
}

export default Field