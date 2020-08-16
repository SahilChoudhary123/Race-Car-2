class Form{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.button = createButton("Start Playing!");
        this.greeting = createElement();
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(200, 0);
        this.input.position(200, 200);
        this.button.position(200, 300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name + " !");
            this.greeting.position(200, 200);
        });
    }
}
