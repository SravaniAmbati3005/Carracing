class Form2 {
    constructor(){
        this.button1 = createButton('create a game')
        this.button2 = createButton('Join a game')
        this.button3 = createButton('Random')
    }
    display(){
        this.button1.position(displayWidth/2 , displayHeight/2)
        this.button2.position(displayWidth/2 , displayHeight/2 - 50)
        this.button3.position(displayWidth/2, displayHeight/2 - 100)

        this.button2.mousePressed(()=>{
             
           join.display();
        })
    }
}