import React from 'react';

import styles from './Filler.module.scss';

const FormFillerText = () => (
  <section className={styles.fillerContainer}>
    <div className={styles.fillerTitleContainer}>
      <h1>Let's talk a bit!</h1>
    </div>
    <div className={styles.fillerTextContainer}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!
      </p>
    </div>
  </section>
);

export default FormFillerText;
