import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData, postData } from '../actions';
import SmurfForm from './SmurfForm';


const SmurfList = () => {
  const smurfs = useSelector( state => state.smurfs );
  const dispatch = useDispatch();
  console.log(smurfs);

  return(
    <div>
      <SmurfForm />
      {smurfs.isFetchingData ? (
        <h2>Fetching Data</h2>
      ) : (
        <button
          onClick={() => dispatch(getData(smurfs))}
        >Get Smurfs</button>
      )}

      {smurfs.map( smurf => (
        <div key={smurf.id}>
          <h3>{smurf.name}</h3>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
