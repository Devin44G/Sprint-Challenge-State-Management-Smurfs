import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions/index';

const SmurfForm = (props) => {

    //set up new state to hold information about new smurf from form input,
    //to eventually POST to the API
    const [addedSmurf, setAddedSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    //handle any changes made to the form inputs, and update (set state) accordingly
    const handleChanges = event => {
        setAddedSmurf({
            ...addedSmurf,
            [event.target.name]: event.target.value
        })
    }

    //on submit of the form, to then POST data of the new Smurf to the API
    const handleSubmit = event => {
        event.preventDefault();
        props.postData(addedSmurf);
        setAddedSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <div>

          <form onSubmit={handleSubmit}>

            <div>
              <input
                type="text"
                name="name"
                value={addedSmurf.name}
                onChange={handleChanges}
              />
            </div>

            <div>
              <input
                type="text"
                name="age"
                value={addedSmurf.age}
                onChange={handleChanges}
              />
            </div>

            <div>
              <input
                type="text"
                name="height"
                value={addedSmurf.height}
                onChange={handleChanges}
              />
            </div>

            <button>Add</button>

          </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {postData})(SmurfForm)
