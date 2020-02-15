module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private endScreen: createjs.Bitmap;
        private message1: objects.Label;
        private message2: objects.Label;
        private flicker = 0;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endScreen = new createjs.Bitmap("./Assets/images/endScene.png");
            this.message1 = new objects.Label("GAME OVER", "50px","Consolas", "#FFFF00", 480, 580, true);
            this.message2 = new objects.Label("CLICK ANYWHERE TO REENTER", "35px","Consolas", "#FFFF00", 480, 680, true);

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.Main();
        }        
        
        public Update(): void {
            if(this.flicker < 50) {
                this.message1.alpha -= 0.02;
                this.message2.alpha -= 0.02;
                this.flicker++;
            } else {
                this.message1.alpha += 0.02;
                this.message2.alpha += 0.02;
                this.flicker++;
                if(this.flicker == 100) {
                    this.flicker = 0;
                }
            }
        }
        
        public Main(): void {
            let cheatButton = document.getElementById("cheatButton");
            if(cheatButton) {
                cheatButton.style.visibility = "hidden";
            }
            this.addChild(this.endScreen);
            this.addChild(this.message1);
            this.addChild(this.message2);

            this.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.START;
            });

        }
        
    }
}