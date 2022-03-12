import c from './AddReview.module.css'
import React from 'react';
import Field from './Field/Field';
import { addReviewCreator } from '../../../redux/review-reducer';

const AddReview = (props) => {
    const new_review = {
        content: React.createRef(),
        name: React.createRef(),
        email: React.createRef(),
        stars: React.createRef(),
        title: React.createRef(),
        ava_url: React.createRef()
    };
    const addReview = () => {
        props.dispatch(addReviewCreator);
    };

    return (
        <div className="text-white col-10 mx-auto">
            <div className={`${c.center} row`}>
                <Field dispatch={props.dispatch} state={{ col: 5, type: 'text', description: 'Ваше имя', placeholder: '', invalidFeedback: 'Имя - обязательное поле.', ref: new_review.name, value: props.new_review.name, key: 'name' }} />
                <Field dispatch={props.dispatch} state={{ col: 5, type: 'text', description: 'Ваш email', placeholder: 'you@example.com', invalidFeedback: 'Еmail - обязательное поле.', ref: new_review.email, value: props.new_review.email, key: 'email' }} />
            </div>
            <br />
            <div className={`${c.center} row`}>
                <Field dispatch={props.dispatch} state={{ col: 10, type: 'text', description: 'Название произведения', placeholder: '', invalidFeedback: 'Название произведения - обязательное поле.', ref: new_review.title, value: props.new_review.title, key: 'title' }} />
            </div>
            <br />
            <div className={`${c.center} row`}>
                <Field dispatch={props.dispatch} state={{ col: 10, type: 'textarea', description: 'Рецензия', placeholder: '', invalidFeedback: 'Рецензия - обязательное поле.', ref: new_review.content, value: props.new_review.content, key: 'content' }} />
            </div>
            <br />
            <div className={`${c.center} row`}>
                <Field dispatch={props.dispatch} state={{ col: 10, type: 'text', description: 'Ссылка на аватарку', placeholder: '', invalidFeedback: 'Ссылка на аватарку - обязательное поле.', ref: new_review.ava_url, value: props.new_review.ava_url, key: 'ava_url'  }} />
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

export default AddReview;