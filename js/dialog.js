class TextDialog {
  
  #message;

  constructor(){}

  unsetMessage(){
    this.#message = undefined;
  }
  setMessage(message){
    this.#message = message;
  }
  getMessage(){
    return this.#message;
  }
  hasMessage(){
    return this.#message !== undefined;
  }
}


class ChoiceDialog {

  #choices;
  #selected;

  constructor(){
    this.#choices = [];
  }

  hasChoices(){
    return this.#choices.length !== 0;
  }
  unsetChoices(){
    this.#choices = [];
  }
  setChoices(choices){
    this.#choices = choices;
  }
  getChoiceLabels(){
    const labels = [];
    for (let choice of this.#choices){
      if (choice !== undefined){
        labels.push(choice);
      }
    }
    return labels;
  }
  selectChoice(item_index){
    this.#selected = item_index;
  }
  getSelectedLabel(){
    return this.#choices[this.#selected];
  }
}
