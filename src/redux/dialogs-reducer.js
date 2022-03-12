/*
    редуктор для виджета с диалогами
*/

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SELECT_DIALOG = 'SELECT-DIALOG';


const getMessage = (user_id, text, date = '') => {
    return {
        user_id: user_id,
        text: text,
        data: date
    };
}

const updateNewMessage = (state, dialog_id, user_id, text) => {
    state.new_messages[dialog_id] = getMessage(user_id, text);

    return state
}

const addNewMessage = (state, dialog_id, date) => {
    state.dialogs[dialog_id].messages.push(getMessage(state.new_messages[dialog_id].user_id, state.new_messages[dialog_id].text, date))
    state.new_messages[dialog_id].text = ''

    return state
}

export const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE) {
        state = updateNewMessage(state, action.id, action.user_id, action.text)
    } else if (action.type === ADD_MESSAGE) {
        const date = action['date'] !== undefined ? action['date'] : (new Date()).toLocaleString()
        state = addNewMessage(state, action.id, date)
    }

    return state
}


export const addMessageCreator = (dialogId) => {
    return { type: ADD_MESSAGE, id: dialogId }
};

export const updateNewMessageCreator = (dialog_id, user_id, text) => {
    return { type: UPDATE_NEW_MESSAGE, id: dialog_id, user_id: user_id, text: text }
};