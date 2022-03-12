const SELECT_HIKE = 'SELECT-HIKE';

const selectHike = (hike_id, state) => {
    state.selected_hike_id = hike_id;

    return state
};

export const hikeReductor = (state, action) => {
    if (action.type === SELECT_HIKE) {
        state = selectHike(action.hike_id, state);
    }

    return state;
};

export const selectHikeCreator = (hike_id) => {
    return { type: SELECT_HIKE, hike_id };
};