import { CONSTANTS } from '../constants/action-types';

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === CONSTANTS.ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === CONSTANTS.DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;