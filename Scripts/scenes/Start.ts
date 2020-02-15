module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private startScreen: createjs.Bitmap;
        private message: objects.Label;
        private flicker = 0;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.startScreen = new createjs.Bitmap("./Assets/images/startScreen.png");
            this.message = new objects.Label("CLICK ANYWHERE TO PLAY", "50px","Consolas", "#FFFF00", 480, 680, true)

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.Main();
        }        
        
        public Update(): void {
            if(this.flicker < 50) {
                this.message.alpha -= 0.02;
                this.flicker++;
            } else {
                this.message.alpha += 0.02;
                this.flicker++;
                if(this.flicker == 100) {
                    this.flicker = 0;
                }
            }
        }
        
        public Main(): void {
            this.addChild(this.startScreen);
            this.addChild(this.message);

            this.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
    
        }
    }
}