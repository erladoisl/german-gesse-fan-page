import c from './Menu.module.css'

const Menu = (props) => {
    let {eating, dispatch, calc_types} = props;

    let changeType = () => {
        console.log(`У .. тип вычисления изменился на ..`)
    };

    return (
        <div className="col-lg-4">
            <p>{eating.eating_category}</p>
            {Object.keys(eating.ingredients).map((id) => {
                return (
                    <div key={id} className="row mx-1">
                        <input className="col-8 themed-grid-col" defaultValue={eating.ingredients[id].name} onChange={console.log(42)} />
                        <input className="col-3 themed-grid-col" value='800 гр' />
                        <div className="col-1 themed-grid-col dropdown p-0 ">
                            <button className={`${c.amount} btn btn-secondary dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {Object.keys(calc_types).map((calc_type) => {
                                   return <li><p className={`dropdown-item ${calc_type === eating.ingredients[id].calc_type ? 'text-primary' : ''}`} href="    " opClick={changeType}>{calc_type}</p></li> 
                                })}
                            </ul>
                        </div>
                    </div>)
            })}
        </div>
    );
};

export default Menu;