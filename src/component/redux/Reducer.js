const initialState = {
    filterData: [], 
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FILTER_DATA':
        return {
          ...state,
          filterData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;