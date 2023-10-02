

const initialState = [];



function reducer(state, action){
    if(action.type === 'Add_Name'){
        return [...state, action.payload]
    }
    return state;
}

