import React from "react";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import * as styles from "./Footer.module.scss";

const Footer = ({ appName }) => {
  return (
    <FulscrnWrpr
      className={styles.Footer}
      containerClassName={styles.container}
    >
      Copyright © {appName} 2015–2021 all rights reserved. 
    </FulscrnWrpr>
  );
};

export default Footer;
