import React from "react";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./AddUsernameBox.module.scss";

const AddUsernameBox = ({
  value,
  onInputHandler,
  onSubmitHandler,
  resetTempNewMovie,
}) => {
  return (
    <form
      className={styles.AddUsernameBox}
      onSubmit={onSubmitHandler}
      onReset={resetTempNewMovie}
    >
      <div className={styles.formRow}>
        <label
          htmlFor="username"
          className={joinClassesWithSpace(styles.formLabel, styles.required)}
        >
          Username
        </label>
        <input
          type="text"
          value={value}
          className={styles.formInput}
          id="username"
          name="username"
          onInput={onInputHandler}
          required={true}
        />
      </div>
      <div className={joinClassesWithSpace(styles.formRow, styles.fullWidth)}>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};

export default AddUsernameBox;
