

const initialState = [];



function reducer(state, action){
    if(action.type === 'Add_Name'){
        return [...state, action.payload]
    }
    if(action.type === 'Delete_Name'){
        return state.filter(personName => personName !== action.payload);
    }
    return state;
}

let newState =  reducer(initialState, {type: 'Add_Name', payload: 'Dima'});
console.log(newState);

newState =  reducer(newState, {type: 'Add_Name', payload: 'Alice'});
console.log(newState);

newState =  reducer(newState, {type: 'Delete_Name', payload: 'Alice'});
console.log(newState);