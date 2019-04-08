import React from "react";

const RegistrationForm = props => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">Student Registration Form</h5>

      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="sname"
            placeholder="Enter student name"
            name="sname"
            onChange={props.onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="semail"
            placeholder="Enter student email"
            name="semail"
            onChange={props.onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="tname"
            placeholder="Enter Teacher name"
            name="tname"
            onChange={props.onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="temail"
            placeholder="Enter teacher email"
            name="temail"
            onChange={props.onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <button type="button" className="btn btn-link" onClick={props.onCancel}>
          Cancel
        </button>
      </form>
    </div>
  </div>
);

export default RegistrationForm;
