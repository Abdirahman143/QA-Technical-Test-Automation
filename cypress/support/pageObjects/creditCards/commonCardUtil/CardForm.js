class CardForm {
  card_form = () => ".card-form";
  fullName =()=>

  scrollToCardForm = () =>{
    cy.get(this.card_form()).scrollIntoView();
  }
    
}

export default new CardForm();