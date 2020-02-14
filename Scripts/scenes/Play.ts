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

        // money + bets
        static playerMoney = 1000;
        static playerMoneyLabel:objects.Label;
        static moneyChanged = false;
        static currentBet = 0;
        static currentBetLabel:objects.Label;
        bet1Button: objects.Button;
        bet5Button: objects.Button;
        bet10Button: objects.Button;
        bet100Button: objects.Button;
        static winnings = 0;
        static winNumber = 0;
        static lossNumber = 0;

        // spin result
        static spinResult = ["", "", ""];

        playLabel:objects.Label;
        //nextButton:objects.Button;
        spinButton:objects.Button;
        resetButton:objects.Button;

        

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.playLabel = new objects.Label();
            //this.nextButton = new objects.Button();
            this.spinButton = new objects.Button();
            this.bet1Button = new objects.Button();
            this.bet5Button = new objects.Button();
            this.bet10Button = new objects.Button();
            this.bet100Button = new objects.Button();
            this.resetButton = new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.playLabel = new objects.Label("Play Label", "80px","Consolas", "#000000", 320, 200, true);
            //this.nextButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this.spinButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this.bet1Button = new objects.Button("./Assets/images/startButton.png", 100, 100, true); // MAKE BUTTON
            this.bet5Button = new objects.Button("./Assets/images/startButton.png", 100, 200, true); // MAKE BUTTON
            this.bet10Button = new objects.Button("./Assets/images/startButton.png", 100, 300, true); // MAKE BUTTON
            this.bet100Button = new objects.Button("./Assets/images/startButton.png", 100, 400, true); // MAKE BUTTON
            scenes.Play.playerMoneyLabel = new objects.Label("$ " + scenes.Play.playerMoney, "40px","Consolas", "#000000", 0, 0, false);
            scenes.Play.currentBetLabel = new objects.Label("$ " + scenes.Play.currentBet,"40px","Consolas", "#000000", 450, 0, false);
            this.resetButton = new objects.Button("./Assets/images/startButton.png", 500, 400, true) // MAKE BUTTON
            this.Main();
        }        
        
        public Update(): void {
            // if statements for changing money and everything else
            if(scenes.Play.moneyChanged) {
                this.removeChild(scenes.Play.playerMoneyLabel);
                scenes.Play.playerMoneyLabel = new objects.Label("$ " + scenes.Play.playerMoney, "40px","Consolas", "#000000", 0, 0, false);
                this.addChild(scenes.Play.playerMoneyLabel);

                this.removeChild(scenes.Play.currentBetLabel);
                scenes.Play.currentBetLabel = new objects.Label("$ " + scenes.Play.currentBet,"40px","Consolas", "#000000", 450, 0, false);
                this,this.addChild(scenes.Play.currentBetLabel);

                scenes.Play.moneyChanged = false;
            }
        }
        
        public Main(): void {
            
            this.addChild(this.playLabel);
            this.addChild(this.spinButton);
            this.addChild(scenes.Play.playerMoneyLabel);
            this.addChild(scenes.Play.currentBetLabel);

            this.addChild(this.bet1Button);
            this.addChild(this.bet5Button);
            this.addChild(this.bet10Button);
            this.addChild(this.bet100Button);

            this.addChild(this.resetButton);

            this.spinButton.on("click", this.SpinMachine);
            // BET BUTTONS
            this.bet1Button.on("click", this.Bet1);
            this.bet5Button.on("click", this.Bet5);
            this.bet10Button.on("click", this.Bet10);
            this.bet100Button.on("click", this.Bet100);

            this.resetButton.on("click", this.ResetGame);
        }

        public ResetGame(): void {
            scenes.Play.playerMoney = 1000;
            scenes.Play.currentBet = 0;
            scenes.Play.moneyChanged = true;
            scenes.Play.grapes = 0;
            scenes.Play.bananas = 0;
            scenes.Play.oranges = 0;
            scenes.Play.cherries = 0;
            scenes.Play.bars = 0;
            scenes.Play.bells = 0;
            scenes.Play.sevens = 0;
            scenes.Play.blanks = 0;
            scenes.Play.winNumber = 0;
            scenes.Play.lossNumber = 0;
        }

        public Bet1(): void {
            if(scenes.Play.playerMoney < 1) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 1;
            scenes.Play.currentBet += 1;
            scenes.Play.moneyChanged = true;
        }

        public Bet5(): void {
            if(scenes.Play.playerMoney < 5) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 5;
            scenes.Play.currentBet += 5;
            scenes.Play.moneyChanged = true;
        }
        public Bet10(): void {
            if(scenes.Play.playerMoney < 10) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 10;
            scenes.Play.currentBet += 10;
            scenes.Play.moneyChanged = true;
        }
        public Bet100(): void {
            if(scenes.Play.playerMoney < 100) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 100;
            scenes.Play.currentBet += 100;
            scenes.Play.moneyChanged = true;
        }
        public SpinMachine(): void {
            console.log("SPUN");
            scenes.Play.spinResult = scenes.Play.Reels();
            console.log(scenes.Play.spinResult);
            scenes.Play.determineWinnings();
            scenes.Play.playerMoney += scenes.Play.winnings;
            scenes.Play.currentBet = 0;
            scenes.Play.moneyChanged = true;
            // update player money
            // reset currentBet to 0
            
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
                //console.log(outCome[spin]);
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

        /* This function calculates the player's winnings, if any */
        public static determineWinnings(): void
        {
            let blanks = 0;
            let grapes = 0;
            let bananas = 0;
            let oranges = 0;
            let cherries = 0;
            let bars = 0;
            let bells = 0;
            let sevens = 0;
            for(let i=0; i<3; i++) {
                switch(scenes.Play.spinResult[i]) {
                    case "blank":
                        blanks++;
                        break;
                    case "Grapes":
                        grapes++;
                        break;
                    case "Banana":
                        bananas++;
                        break;
                    case "Orange":
                        oranges++;
                        break;
                    case "Cherry":
                        cherries++;
                        break;
                    case "Bar":
                        bars++;
                        break;
                    case "Bell":
                        bells++;
                        break;
                    case "Seven":
                        sevens++;
                        break;
                }
            }
            if (blanks == 0)
            {
                if (grapes == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 10;
                }
                else if(bananas == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 20;
                }
                else if (oranges == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 30;
                }
                else if (cherries == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 40;
                }
                else if (bars == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 50;
                }
                else if (bells == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 75;
                }
                else if (sevens == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 100;
                }
                else if (grapes == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 2;
                }
                else if (bananas == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 2;
                }
                else if (oranges == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 3;
                }
                else if (cherries == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 4;
                }
                else if (bars == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 5;
                }
                else if (bells == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 10;
                }
                else if (sevens == 2) {
                    scenes.Play.winnings = scenes.Play.currentBet * 20;
                }
                else if (sevens == 1) {
                    scenes.Play.winnings = scenes.Play.currentBet * 5;
                }
                else {
                    scenes.Play.winnings = scenes.Play.currentBet * 1;
                }
                scenes.Play.winNumber++;
                console.log("Winnings: " + scenes.Play.winnings);
                //showWinMessage();
            }
            else
            {
                scenes.Play.lossNumber++;
                console.log("Lost");
                scenes.Play.winnings = 0;
                //showLossMessage();
            }
            
        }
        
    }
}