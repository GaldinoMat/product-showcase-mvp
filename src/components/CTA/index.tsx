import * as React from 'react';
import { ICallToActionProps } from './types/interfaces';

import styles from './CTA.module.scss';
import LinkButton from '../LinkButton';

const CTA = ({ CTAProps }: ICallToActionProps) => {
  const {
    callToActionButtonText, callToActionTextsArray, callToActionUrlLink, callToActionTitle,
  } = CTAProps;

  return (
    <section className={styles.callToActionContainer}>
      <article className={styles.callToActionArticle}>
        {callToActionTitle ? (
          <h2 className={styles.callToActionTitle}>{callToActionTitle}</h2>
        ) : null}
        {callToActionTextsArray.map((text) => (
          <p key={callToActionTextsArray.indexOf(text)} className={styles.callToActionArticleText}>
            {text.callToActionText}
          </p>
        ))}
        <LinkButton callToActionButtonText={callToActionButtonText} callToActionUrlLink={callToActionUrlLink} />
      </article>
    </section>
  );
};

export default CTA;
