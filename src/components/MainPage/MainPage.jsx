import c from './MainPage.module.css'

const MainPage = (props) => {
    return (
        <div className="bg-dark text-white">
            <div className='row head mx-0' style={{ height: '170px', contentVisibility: 'auto' }}>
                <img alt='books ib background' src='https://www.fewskills.com/wp-content/uploads/2018/12/11-1.jpg' />
            </div>
            <div className={`container ${c.container}`}>
                <div className="row">
                    <div className="col-3">
                        <img alt='author avatar' className={c.avatar} src={props.content.about_gesse.avatar_url} />
                    </div>
                    <div className='col'>
                        {props.content.about_gesse.text}                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage 