/*
    редуктор для страницы с рецензиями
*/

const ADD_REVIEW = 'ADD-REVIEW';
const UPDATE_NEW_REVIEW = 'UPDATE-NEW-REVIEW';

const clearNewReview = (state) => {
    state.new_review = {
        id: state.reviews.lenght,
        content: '',
        name: '',
        stars: '',
        title: '',
        ava_url: '',
        email: ''
    };

    return state;
}

export const reviewReducer = (state, action) => {
    if (action.type === ADD_REVIEW) {
        state.reviews.push(state.new_review);
        state = clearNewReview(state)
    } else if (action.type === UPDATE_NEW_REVIEW) {
        state.new_review[action.key] = action.value;
    }

    return state;
}

export const addReviewCreator = () => {
    return { 'type': ADD_REVIEW };
}

export const updateNewReviewCreator = (key, value) => {
    return { 'type': UPDATE_NEW_REVIEW, key, value };
}