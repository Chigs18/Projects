const InitialData={
    deatils:[],
    isDeleteResponse:false,
    isResponse:false,
}

const reducer = (state=InitialData,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                deatils:action.payload
            }
         case 'DELETE_DETAILS':
                return{
                    isDeleteResponse:action.payload
                }
                case 'POST_DETAILS':
                return{
                    isResponse:action.payload
                }
        default:return state;
    }
}
export default reducer;