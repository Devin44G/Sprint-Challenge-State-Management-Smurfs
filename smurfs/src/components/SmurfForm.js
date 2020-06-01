import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions/index';

const SmurfForm = (props) => {

    const [addedSmurf, setAddedSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    const handleChanges = event => {
        setAddedSmurf({
            ...addedSmurf,
            [event.target.name]: event.target.value
        })
    }

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
