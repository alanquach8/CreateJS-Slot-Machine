module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endLabel:objects.Label;
        backButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endLabel = new objects.Label();
            this.backButton = new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.endLabel = new objects.Label("End Scene", "80px","Consolas", "#000000", 320, 200, true);
            this.backButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
           
            this.Main();
        }        
        
        public Update(): void {

        }
        
        public Main(): void {
            
            this.addChild(this.endLabel);
    
            this.addChild(this.backButton);
    
            this.backButton.on("click", function() {
               //console.log("Start Clicked!");
               config.Game.SCENE_STATE = scenes.State.PLAY;
            });

        }
        
    }
}