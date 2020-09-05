import { combineReducers } from 'redux'


const missions = (state = {}, action) => {
  switch (action.type) {
    case `REQUESTING_MISSIONS`:
        return {
            ...state,
            ...action.state,
            isLoading: true,
            success: false,
            error: false,
        };
    case `SUCCESS_MISSIONS`:
        return {
            ...state,
            ...action.state,
            isLoading: false,
            success: true,
            error: false,
        };
    case `FAILED_MISSION`:
        return {
            ...state,
            ...action.state,
            isLoading: false,
            success: false,
            error: true,
        };
    default:
      return state
  }
}



const rootReducer = combineReducers({
  missions
})

export default rootReducer
