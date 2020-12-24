export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finish developing...
    token: 'BQABibm_PPJoheX5QFwX0jyaJ5fuMOBFD85myuns_GAeX8Q1sV724yRgRDfNH4MX01BXaaUnWXyqVKnzqGNs3c-osU0eeQEHiBwoEpq3eMbgD2rNd9EKwsumFwpsqIGCHMfOg74t3K9idUh7V3ST-oOeFdjjpXCHkWeIk1tncVV0D3axvU_W',

};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };

            case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };    
            default:
                return state;
    }
}

export default reducer;
