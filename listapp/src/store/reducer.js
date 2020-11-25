const initialState = {
    items: []
}

export default (state = initialState, action) =>{
    switch (action.type){
        case "ADD_TO_LIST":
            return{
                ...state,
                items: [
                    ...state.items,
                    {
                        value: action.payload,
                        inBasket: false
                    }
                ]
            };
        case "CLEAR_ITEMS": {
            return{
                items:[]
            };
        }
        case "ADD_TO _BASKET":
            return{
                ...state,
                items: updateObjectInArray(state.items, action)
            };
        case "REMOVE_ITEM":
            return{
                ...state,
                items: removeItemFromList(state.items,action)
            };
            default: 
            return state;
    }
}

function updateObjectInArray(array, action){
    return array.map((item, index)=>{
        if(index !== action.index){
            //Item we keep as is
            return item
        }
        //item we want - return updated value
        return {
            ...item,
            inBasket:true
        };
    });
};

function removeItemFromList(array, action){
    return array.filter((item, index)=> index !== action.index)
}