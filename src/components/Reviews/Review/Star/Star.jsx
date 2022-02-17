import c from './Star.module.css'

const Star = (props) => {
    return (
        <div className="_1yvpo jBjVL col-auto px-0 mx-auto" data-rating-value="5" >
            <div >
                <div className=" ">
                    <svg className={c.star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path fillRule="evenodd" d="M12 17.768L5.848 21.63a.6.6 0 0 1-.901-.655l1.772-7.043-5.573-4.656a.6.6 0 0 1 .344-1.06l7.245-.49 2.707-6.74a.6.6 0 0 1 1.113 0l2.706 6.74 7.246.49a.6.6 0 0 1 .344 1.06l-5.573 4.656 1.772 7.043a.6.6 0 0 1-.901.655L12 17.768z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Star 