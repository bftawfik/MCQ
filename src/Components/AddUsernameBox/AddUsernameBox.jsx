import React from "react";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./AddUsernameBox.module.scss";

const AddUsernameBox = ({
  tempUsername,
  onInputHandler,
  onSubmitHandler,
  onResetHandler,
}) => {
  return (
    <form
      className={styles.AddUsernameBox}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
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
          value={tempUsername}
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
