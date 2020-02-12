module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        // slot-machine variables
        static grapes = 0;
        static bananas = 0;
        static oranges = 0;
        static cherries = 0;
        static bars = 0;
        static bells = 0;
        static sevens = 0;
        static blanks = 0;
        spinResult = [" ", " ", " "];

        playLabel:objects.Label;
        //nextButton:objects.Button;
        spinButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.playLabel = new objects.Label();
            //this.nextButton = new objects.Button();
            this.spinButton = new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.playLabel = new objects.Label("Play Label", "80px","Consolas", "#000000", 320, 200, true);
            //this.nextButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this.spinButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
           
            this.Main();
        }        
        
        public Update(): void {

        }
        
        public Main(): void {
            
            this.addChild(this.playLabel);
            this.addChild(this.spinButton);

            this.spinButton.on("click", this.SpinMachine);
    
            //this.addChild(this.nextButton);
    
            // this.nextButton.on("click", function() {
            //    //console.log("Start Clicked!");
            //    config.Game.SCENE_STATE = scenes.State.END;
            // });
        }

        public SpinMachine(): void {
            console.log("SPUN");
            this.spinResult = scenes.Play.Reels();
            console.log(this.spinResult);
            // based on spin results: show reel spinning + generate images

            // FROM "main.js" IN "slotmachine-master" 
            //playerBet = $("div#betEntry>input").val();
            // if (playerMoney == 0)
            // {
            //     if (confirm("You ran out of Money! \nDo you want to play again?")) {
            //         resetAll();
            //         showPlayerStats();
            //     }
            // }
            // else if (playerBet > playerMoney) {
            //     alert("You don't have enough Money to place that bet.");
            // }
            // else if (playerBet < 0) {
            //     alert("All bets must be a positive $ amount.");
            // }
            // else if (playerBet <= playerMoney) {
            //     spinResult = Reels();
            //     fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
            //     $("div#result>p").text(fruits);
            //     determineWinnings();
            //     turn++;
            //     showPlayerStats();
            // }
            // else {
            //     alert("Please enter a valid bet amount");
            // }
        }
        
        // FUNCTIONS FROM "main.js" IN "slotmachine-master" (converted into TS and slightly altered)
        /* Utility function to check if a value falls within a range of bounds */
        public static checkRange(value:number, lowerBounds:number, upperBounds:number): number {
            if (value >= lowerBounds && value <= upperBounds)
            {
                return value;
            }
            else {
                return -1;
            }
        }
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        public static Reels(): string[] {
            let betLine = [" ", " ", " "];
            let outCome = [0, 0, 0];

            for (let spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                console.log(outCome[spin]);
                switch (outCome[spin]) {
                    case this.checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "blank";
                        this.blanks++;
                        break;
                    case this.checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Grapes";
                        this.grapes++;
                        break;
                    case this.checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Banana";
                        this.bananas++;
                        break;
                    case this.checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Orange";
                        this.oranges++;
                        break;
                    case this.checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Cherry";
                        this.cherries++;
                        break;
                    case this.checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Bar";
                        this.bars++;
                        break;
                    case this.checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Bell";
                        this.bells++;
                        break;
                    case this.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this.sevens++;
                        break;
                }
            }
            return betLine;
        }
        
    }
}