export interface IInfoCard {
  infoCardTitle: string
  infoCardText: string
  infoCardSlug: string
  infoCardImage: { url: string }
}

export interface IInfoCardsGridProps {
  cardsGridProps: IInfoCard[]
}
