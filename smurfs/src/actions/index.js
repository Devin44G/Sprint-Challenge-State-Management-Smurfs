import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';
export const POST_DATA = 'POST_DATA';

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA });

  axios.get('http://localhost:3333/smurfs')
        .then ( res => {
          console.log(res.data);
          dispatch({ type: ADD_SMURF, payload: res.data })
        })
        .catch( err => {
          console.log(err);
          dispatch({ type: SET_ERROR, payload: 'Error retrieving data: err', err });
        });
};

export const postData = addedSmurf => dispatch => {

    axios.post("http://localhost:3333/smurfs", addedSmurf)
          .then (response => {
            console.log(response)
            dispatch({type: POST_DATA, payload: addedSmurf})
          })
          .catch(error => {
            console.log(error)
          });
};
