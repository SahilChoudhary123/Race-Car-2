class Game
{
    constructor(){
    }
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref("/").update({
            gameState : state
        });
    }
    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        text("Game Start", 200, 200);
        Player.getPlayerInfo();
        var displayPosition = 130;
        for(var p1 in allPlayers){
            if(p1 === "player" + player.index)
            fill("red");
            else
            fill("green");
            displayPosition = displayPosition + 20;
            textSize(40);
            text(allPlayers[p1].name + " " + allPlayers[p1].distance, 50, displayPosition);
        }
        if(keyIsDown(UP_ARROW)){
            player.distance = player.distance + 5;
            player.update();
        }
    }
}
