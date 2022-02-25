import c from './AddReview.module.css'
import React from 'react';
import Field from './Field/Field';

const AddReview = (props) => {
    const newReview = {
        content: React.createRef(),
        name: React.createRef(),
        email: React.createRef(),
        stars: React.createRef(),
        title: React.createRef(),
        ava_url: React.createRef()
    };
    const addReview = () => {
        props.addReview(newReview.content.current.value,
            newReview.name.current.value,
            5,
            newReview.title.current.value,
            newReview.ava_url.current.value,
            newReview.email.current.value)
    };

    return (
        <div className="text-white col-10 mx-auto">
            <div className={`${c.center} row`}>
                <Field state={{ col: 5, type: 'text', description: 'Ваше имя', placeholder: '', invalidFeedback: 'Имя - обязательное поле.', ref: newReview.name }} />
                <Field state={{ col: 5, type: 'text', description: 'Ваш email', placeholder: 'you@example.com', invalidFeedback: 'Еmail - обязательное поле.', ref: newReview.email }} />
            </div>
            <br />
            <div className={`${c.center} row`}>
                <Field state={{ col: 10, type: 'text', description: 'Название произведения', placeholder: '', invalidFeedback: 'Название произведения - обязательное поле.', ref: newReview.title }} />
            </div>
            <br />
            <div className={`${c.center} row`}>
                <Field state={{ col: 10, type: 'textarea', description: 'Рецензия', placeholder: '', invalidFeedback: 'Рецензия - обязательное поле.', ref: newReview.content }} />
            </div>
            <br />
            <div className={`${c.center} row`}>
                <Field state={{ col: 10, type: 'text', description: 'Ссылка на аватарку', placeholder: '', invalidFeedback: 'Ссылка на аватарку - обязательное поле.', ref: newReview.ava_url }} />
            </div>
            <br />
            <div className={`${c.center} row `}>
                <div className="d-grid gap-2 col-10">
                    <button className="btn btn-primary btn-lg" onClick={addReview} >Сохранить</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AddReview