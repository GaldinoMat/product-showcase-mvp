interface ICallToActionText {
  callToActionText: string
}

export interface ICallToActionProps {
  CTAProps: { callToActionTextsArray: ICallToActionText[], callToActionButtonText: string, callToActionUrlLink: string }
}
