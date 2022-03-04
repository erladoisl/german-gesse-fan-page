import c from './Ingredient.module.css'

const Ingredient = (props) => {
    let { ingredient, dispatch, calc_types } = props;

    let changeType = () => {
        console.log(`У .. тип вычисления изменился на ..`)
    };

    return (
        <div className="row mx-1">
            <input className="col-8 themed-grid-col" defaultValue={ingredient.name} onChange={console.log(42)} />
            <input className="col-3 themed-grid-col" />
            <div className="col-1 themed-grid-col dropdown p-0 ">
                <button className={`${c.amount} btn btn-secondary dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {Object.keys(calc_types).map((calc_type) => {
                        return <li key={calc_type}><p className={`dropdown-item ${calc_type === ingredient.calc_type ? 'text-primary' : ''}`} onClick={changeType}>{calc_type}</p></li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Ingredient;