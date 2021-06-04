import React from "react";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import * as styles from "./Header.module.scss";

const Header = ({ appName }) => {
  return (
    <FulscrnWrpr
      className={styles.Header}
      containerClassName={styles.container}
    >
      {appName}
    </FulscrnWrpr>
  );
};

export default Header;
