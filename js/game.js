var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0  
        }
    },
    arcade: { debug: true }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload ()
{
    this.load.image('ball', 'pangball.png');
}

function create ()
{
   // this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, true, true);

    //  Add in a stack of balls
  
        var ball1 = this.physics.add.image(100, 100, 'ball');
        ball1.setCircle(16);
        var ball2 = this.physics.add.image(200, 100, 'ball');
        ball2.setCircle(16);
        var cursor = this.add.image(0, 0, 'cursor').setVisible(false);
        this.input.on('pointermove', function (pointer) {
           //chujowo
           // let ownPos = game.input.mousePointer;
            //// //let ballPos = ball1.getCenter
            //ball1.setPosition(pointer.x,pointer.y);
            /////const cam = this.cameras.main;
            ///////////////////cam.centerOn(pointer.x, pointer.y);
            //koncchujowo
            //chujowoalektorobidobrze
            cursor.setVisible(true).setPosition(pointer.x, pointer.y);
            this.physics.moveToObject(ball1, cursor, 240);
            //this.cameras.main.startFollow(this.cursor);
            this.cameras.main.centerOn(cursor.x, cursor.y);
            if (cursor.x==ball1.x && cursor.y==ball1.y){//na pewno bedzie spelniony kiedys ten warunek tf
            ball1.setVelocity(0,0);
            //koniecchujowoalektorobidobrze
            }
        }, this);
        
        //this.cameras.main.setBounds(0,0,800,600);
        //this.cameras.main.startFollow(this.ball1);

       //gigachujowo
        //////////////////  let wayPoint1 = ball1.getCenter(); //Player, change to for example scene.input.activePointer or something
        //////////////////  let ownPos1 = game.input.mousePointer; //Enemy, the sprite or camera
        //////////////////  let direction = wayPoint1.subtract(ownPos1).normalize();
        //////////////////  ball1.setVelocity(direction.x, direction.y);
       ///////////////////////////////////////// this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });
 
//let wayPoint2 = ball2.getCenter(); //Player, change to for example scene.input.activePointer or something
//let ownPos2 = ball1.getCenter(); //Enemy, the sprite or camera 

//let direction2 = wayPoint2.subtract(ownPos).normalize(); //.scale(this.speed) I scale with a configurable this.speed to make enemy move faster/slower depending on situation.
//let lerpedDirection2 = direction.lerp(this.body.velocity, 0.2); // Set 0.2 to 0.99 to get very smooth movement

//this.setVelocity(lerpedDirection.x, lerpedDirection.y);
   /////////////////////////gigachujowokoniec
}
function update()
{


    
}