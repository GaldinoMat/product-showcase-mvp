import Link from 'next/link';
import * as React from 'react';
import { ICallToActionProps } from './types/interfaces';

import styles from './CTA.module.scss';

const CTA = ({ CTAProps }: ICallToActionProps) => {
  const { callToActionButtonText, callToActionTextsArray, callToActionUrlLink } = CTAProps;

  return (
    <section className={styles.callToActionContainer}>
      <article className={styles.callToActionArticle}>
        {callToActionTextsArray.map((text) => (
          <p className={styles.callToActionArticleText}>
            {text.callToActionText}
          </p>
        ))}
        <Link href={`/${callToActionUrlLink}`}>
          <button className={styles.callToActionLink} type="button">{callToActionButtonText}</button>
        </Link>
      </article>
    </section>
  );
};

export default CTA;
