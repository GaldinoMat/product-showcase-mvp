import React from 'react';
import InfoCard from './InfoCards';
import { IInfoCard, IInfoCardsGridProps } from './types/interfaces';

import styles from './InfoCardsGrid.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const InfoCardsGrid = ({ cardsGridProps } : IInfoCardsGridProps) => {
  const width = useWindowWidth();

  return (
    <section className={styles.infoCardsContainer} style={width <= 760 ? { gridTemplateRows: `repeat(${cardsGridProps.length}, 1fr)` } : { gridTemplateColumns: `repeat(${cardsGridProps.length}, 1fr)` }}>
      {cardsGridProps.map((infoCard: IInfoCard) => (
        <InfoCard key={cardsGridProps.indexOf(infoCard)} infoCardImage={infoCard.infoCardImage} infoCardSlug={infoCard.infoCardSlug} infoCardText={infoCard.infoCardText} infoCardTitle={infoCard.infoCardTitle} />
      ))}
    </section>
  );
};

export default InfoCardsGrid;
