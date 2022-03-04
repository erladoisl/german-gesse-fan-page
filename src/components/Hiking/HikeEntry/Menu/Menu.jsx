import Ingredient from './Ingredient/Ingredient';

const Menu = (props) => {
    let {eating, dispatch, calc_types} = props;

    let changeType = () => {
        console.log(`У .. тип вычисления изменился на ${this.innerText}`)
    };

    return (
        <div className="col-lg-4">
            <p>{eating.eating_category}</p>
            {Object.keys(eating.ingredients).map((id) => {
                return <Ingredient key={id} ingredient={eating.ingredients[id]} calc_types={calc_types} dispatch={dispatch}/>
            })}
        </div>
    );
};

export default Menu;