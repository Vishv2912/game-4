class Game {
    constructor() {
        console.log("New Game")

        diamondAnimation=loadImage("diamond1.png")

    }
    async getGameState() {
        await database.ref("gameState").on("value", function (data) {
            gameState = data.val()
            console.log("gameState", gameState)
        })
    }
    updateGameState(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    getPlayerCount() {
        database.ref("playerCount").on("value", (data) => {
            playerCount = data.val();
            console.log("playerCount", playerCount)
        })
    }
    updatePlayerCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    start() {
        console.log("Start State")
        player = new Player();
        otherPlayer = new Player();
        form = new Form()
    }
    wait() {
        form.hideall()
        clear();
        textSize(18);
        text("Waiting for other player to join.....", width / 2 - 120, 350)
    }
    play() {
        console.log("Play State")
    background("blue")

console.log(diamond)
 ////diamond variable==
 diamond=createSprite(200,100,20,20)
 diamond.addImage(diamondAnimation)
 
        form.hideall()

        shouldWait = false
        form.msg.hide()
        drawSprites()
        player.getInfo();
        otherPlayer.getInfo();
        maze.collidePlayer()
        if (keyIsDown(UP_ARROW))
        {
        player.updatePosition(0,-4)
            player.direction = "Back"
            player.animation=player.character + "BackMoving"
            player.updateAnimation()
        }
        else if (keyIsDown(DOWN_ARROW))
        {
            player.updatePosition(0,4)
        
            player.direction = "Front"
            player.animation= player.character + "FrontMoving"
            player.updateAnimation()
        
        }
        else if (keyIsDown(LEFT_ARROW))
        {
            player.updatePosition(-4,0)
        
            player.direction = "Left"
            player.animation = player.character + "LeftMoving"
     
            player.updateAnimation()
        }
        else if (keyIsDown(RIGHT_ARROW))
        {
            player.updatePosition(4,0)
        
            player.direction = "Right"
            player.animation=player.character + "RightMoving"
     
            player.updateAnimation()
        }
        else
        {
            player.animation  = "guard" + player.direction + "Standing"

            player.updateAnimation()
        }
        player.sprite.changeAnimation(player.animation, player.animation)
        otherPlayer.sprite.changeAnimation(otherPlayer.animation, otherPlayer.animation)

    }
}