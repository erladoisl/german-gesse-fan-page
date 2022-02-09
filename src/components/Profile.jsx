const Profile = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px'}}>
            <div className='head'>
                <img src = 'https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg' />
            </div>
            <div className='profile'>
                <img src='https://sun9-50.userapi.com/impg/aobXMIgKgMR0UaQrodUhdxVtbLpAtlugmOj-EQ/KBJg4GNh9Jg.jpg?size=520x0&quality=95&sign=f171ae7329fd4a26bb267515ace8f3bc'/>
            </div>
            <div>
            My posts
            <div>
                New post
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>  
            </div>
        </div>
    );
}

export default Profile 