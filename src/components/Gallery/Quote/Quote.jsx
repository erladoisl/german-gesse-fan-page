import c from './Quote.module.css'

const Quote = (props) => {
    return (
        <div className={c.grey}>
            {props.quote}

            <div className={c.signature}>
                {props.sign}
            </div>
        </div>
    );
};

export default Quote;