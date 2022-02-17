const Title = (props) => {
    return (
        <div className='row'>
            <div className='col-auto mx-auto'>
                Рецензия на:
            </div>
            <div className='col-auto mx-auto'>
                {props.title}
            </div>
        </div>
    );
}

export default Title 