class Admin{
    constructor(){

    this.generateSecretWord = createButton('Generate Secret Code');
    this.message = createElement('h3');
    this.SecretWoed = createElement('h3');
    this.nameInput = createInput('').attribute("placeHolder" , "name")
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h3');
    this.playerButton = createButton ('play');
    }
    hideElements(){
        
    }
}