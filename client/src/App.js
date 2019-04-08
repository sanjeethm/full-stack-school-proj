import React, { Component } from "react";

import axios from "axios";
import { SCHOOL_OPTIONS, NO_SCHOOL_OPTIONS } from "../src/config";
import SchoolOption from "../src/schoolOption";

class App extends Component {
  // initialize our state
  state = {
    selectedStudentOption: NO_SCHOOL_OPTIONS,
    sname: "",
    semail: "",
    tname: "",
    temail: ""
  };

  shouldRenderStudentOption = studentOption =>
    this.state.selectedStudentOption === NO_SCHOOL_OPTIONS ||
    this.state.selectedStudentOption === studentOption;

  selectStudentOption = studentOption => {
    this.setState({
      selectedStudentOption: studentOption
    });
  };

  cancelStudentOption = event => {
    //alert("in cancel");
    this.selectStudentOption(NO_SCHOOL_OPTIONS);
  };

  submitRegistrationForm = event => {
    event.preventDefault();
    alert("Registration Form>>>>>" + event.name);
  };

  onChangeofField = event => {
    event.preventDefault();
    alert("hellooooooo" + event.target.sname);
  };

  render() {
    const showStudentRegistrationForm =
      this.state.selectedStudentOption !== NO_SCHOOL_OPTIONS;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            {this.shouldRenderStudentOption(
              SCHOOL_OPTIONS.REGISTER_STUDENT
            ) && (
              <SchoolOption
                name={SCHOOL_OPTIONS.REGISTER_STUDENT}
                onSelectStudentOption={this.selectStudentOption}
                onCancelStudentOption={this.cancelStudentOption}
                showStudentRegistrationForm={showStudentRegistrationForm}
                onSubmitRegistrationForm={this.submitRegistrationForm}
                handleOnchange={this.onChangeofField}
              />
            )}

            {this.shouldRenderStudentOption(
              SCHOOL_OPTIONS.RETRIEVE_ALL_STUDENTS
            ) && (
              <SchoolOption
                name={SCHOOL_OPTIONS.RETRIEVE_ALL_STUDENTS}
                onSelectStudentOption={this.selectStudentOption}
                onCancelStudentOption={this.cancelStudentOption}
                showStudentRegistrationForm={showStudentRegistrationForm}
              />
            )}

            {this.shouldRenderStudentOption(
              SCHOOL_OPTIONS.RETRIEVE_STUDENT_BY_ID
            ) && (
              <SchoolOption
                name={SCHOOL_OPTIONS.RETRIEVE_STUDENT_BY_ID}
                onSelectStudentOption={this.selectStudentOption}
                onCancelStudentOption={this.cancelStudentOption}
                showStudentRegistrationForm={showStudentRegistrationForm}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
