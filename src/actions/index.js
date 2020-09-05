
import Axios from 'axios'

export const REQUEST_MISSIONS = 'REQUESTING_MISSIONS'
export const SUCCESS_MISSIONS = 'SUCCESS_MISSIONS'
export const FAILED_MISSION = 'FAILED_MISSION'



export const fetchMissions = (url) => {
  return  dispatch => {
    dispatch({ type: REQUEST_MISSIONS });
    return   Axios.get(url)
      .then(response => {
        dispatch({
          type: SUCCESS_MISSIONS,
          state: { list: response.data },
        });
      })
      .catch(error => {
        dispatch({ type: FAILED_MISSION, state: {failure:error} });
      });
  };
};


