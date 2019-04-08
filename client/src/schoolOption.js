import React from "react";
import RegistrationForm from "../src/registrationForm";
import { SCHOOL_OPTIONS } from "../src/config";

const SchoolOption = props => {
  if (
    props.showStudentRegistrationForm &&
    props.name === SCHOOL_OPTIONS.REGISTER_STUDENT
  ) {
    return (
      <RegistrationForm
        onSubmit={props.onSubmitRegistrationForm}
        onCancel={props.onCancelStudentOption}
        onChange={props.handleOnchange}
      />
    );
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <button
          className="btn btn-primary"
          onClick={() => props.onSelectStudentOption(props.name)}
        >
          Choose {props.name}
        </button>
      </div>
    </div>
  );
};

export default SchoolOption;
