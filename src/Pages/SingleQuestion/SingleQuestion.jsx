import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";

const SingleQuestion = ({ username }) => {
  return username?.length ? (
    <FulscrnWrpr>SingleQuestion</FulscrnWrpr>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);
