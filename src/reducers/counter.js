const counterReducer = (state=0,action) =>{
    switch(action.type){
        case 'INCREMENT': //Increments the counter
            return state+1

        case 'DECREMENT':

            return state - 1 //Decrements the counter

            default:
                return state;
    }
}

export default counterReducer;