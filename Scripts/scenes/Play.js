"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            // initialization
            _this.spinButton = new objects.Button();
            _this.bet1Button = new objects.Button();
            _this.bet5Button = new objects.Button();
            _this.bet10Button = new objects.Button();
            _this.bet100Button = new objects.Button();
            _this.resetButton = new objects.Button();
            _this.slotMachineImage = new createjs.Bitmap("./Assets/images/slotmachine.png");
            _this.quitButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this.spinButton = new objects.Button("./Assets/images/startButton.png", 650, 650, true);
            this.bet1Button = new objects.Button("./Assets/images/bet1Button.png", 585, 575, true);
            this.bet5Button = new objects.Button("./Assets/images/bet5Button.png", 685, 575, true);
            this.bet10Button = new objects.Button("./Assets/images/bet10Button.png", 785, 575, true);
            this.bet100Button = new objects.Button("./Assets/images/bet100Button.png", 885, 575, true);
            scenes.Play.playerMoneyLabel = new objects.Label("Money: $" + scenes.Play.playerMoney, "35px", "Consolas", "#FFFFFF", 30, 550, false);
            scenes.Play.currentBetLabel = new objects.Label("Bet: $" + scenes.Play.currentBet, "35px", "Consolas", "#FFFFFF", 30, 600, false);
            scenes.Play.jackpotLabel = new objects.Label("JACKPOT $" + scenes.Play.jackpot, "55px", "Consolas", "#FFFFFF", 300, 30, false);
            this.resetButton = new objects.Button("./Assets/images/resetButton.png", 850, 650, true);
            this.quitButton = new objects.Button("./Assets/images/quitButton.png", 110, 665, true);
            this.slotMachineImage = new createjs.Bitmap("./Assets/images/slotmachine.png");
            this.Main();
        };
        Play.prototype.Update = function () {
            if (scenes.Play.isSpinning) {
                if (scenes.Play.toggleCounter < 50) {
                    this.removeChild(scenes.Play.slot[0]);
                    this.removeChild(scenes.Play.slot[1]);
                    this.removeChild(scenes.Play.slot[2]);
                    scenes.Play.slot[0] = new createjs.Bitmap(scenes.Play.images[Math.floor((Math.random() * 8) + 1)]);
                    scenes.Play.slot[0].x = 35;
                    scenes.Play.slot[0].y = 115;
                    scenes.Play.slot[1] = new createjs.Bitmap(scenes.Play.images[Math.floor((Math.random() * 8) + 1)]);
                    scenes.Play.slot[1].x = 350;
                    scenes.Play.slot[1].y = 115;
                    scenes.Play.slot[2] = new createjs.Bitmap(scenes.Play.images[Math.floor((Math.random() * 8) + 1)]);
                    scenes.Play.slot[2].x = 660;
                    scenes.Play.slot[2].y = 115;
                    this.addChild(scenes.Play.slot[0]);
                    this.addChild(scenes.Play.slot[1]);
                    this.addChild(scenes.Play.slot[2]);
                    scenes.Play.toggleCounter++;
                }
                else {
                    scenes.Play.toggleCounter = 0;
                    scenes.Play.isSpinning = !scenes.Play.isSpinning;
                }
            }
            else {
                if (scenes.Play.jackpotWon) {
                    for (var i = 0; i < 5; i++) {
                        this.removeChild(scenes.Play.jackpotLights[i]);
                    }
                    if (scenes.Play.toggle) {
                        scenes.Play.toggleCounter++;
                        scenes.Play.jackpotLights[0] = new objects.JackpotLight("./Assets/images/jackpotGreen.png", 30, 17, true);
                        scenes.Play.jackpotLights[1] = new objects.JackpotLight("./Assets/images/jackpotBlue.png", 110, 17, true);
                        scenes.Play.jackpotLights[2] = new objects.JackpotLight("./Assets/images/jackpotGreen.png", 190, 17, true);
                        scenes.Play.jackpotLights[3] = new objects.JackpotLight("./Assets/images/jackpotBlue.png", 780, 17, true);
                        scenes.Play.jackpotLights[4] = new objects.JackpotLight("./Assets/images/jackpotGreen.png", 860, 17, true);
                        if (scenes.Play.toggleCounter == 20) {
                            scenes.Play.toggle = !scenes.Play.toggle;
                            scenes.Play.toggleCounter = 0;
                        }
                    }
                    else {
                        scenes.Play.toggleCounter++;
                        scenes.Play.jackpotLights[0] = new objects.JackpotLight("./Assets/images/jackpotBlue.png", 30, 17, true);
                        scenes.Play.jackpotLights[1] = new objects.JackpotLight("./Assets/images/jackpotGreen.png", 110, 17, true);
                        scenes.Play.jackpotLights[2] = new objects.JackpotLight("./Assets/images/jackpotBlue.png", 190, 17, true);
                        scenes.Play.jackpotLights[3] = new objects.JackpotLight("./Assets/images/jackpotGreen.png", 780, 17, true);
                        scenes.Play.jackpotLights[4] = new objects.JackpotLight("./Assets/images/jackpotBlue.png", 860, 17, true);
                        if (scenes.Play.toggleCounter == 20) {
                            scenes.Play.toggle = !scenes.Play.toggle;
                            scenes.Play.toggleCounter = 0;
                        }
                    }
                    for (var i = 0; i < 5; i++) {
                        this.addChild(scenes.Play.jackpotLights[i]);
                    }
                }
                // if statements for changing money and everything else
                if (scenes.Play.spun) {
                    // reel animations
                    scenes.Play.slot[0] = new createjs.Bitmap("./Assets/images/" + scenes.Play.spinResult[0] + ".png");
                    scenes.Play.slot[0].x = 35;
                    scenes.Play.slot[0].y = 115;
                    scenes.Play.slot[1] = new createjs.Bitmap("./Assets/images/" + scenes.Play.spinResult[1] + ".png");
                    scenes.Play.slot[1].x = 350;
                    scenes.Play.slot[1].y = 115;
                    scenes.Play.slot[2] = new createjs.Bitmap("./Assets/images/" + scenes.Play.spinResult[2] + ".png");
                    scenes.Play.slot[2].x = 660;
                    scenes.Play.slot[2].y = 115;
                    this.addChild(scenes.Play.slot[0]);
                    this.addChild(scenes.Play.slot[1]);
                    this.addChild(scenes.Play.slot[2]);
                    this.addChild(this.slotMachineImage);
                    this.addChild(this.spinButton);
                    this.addChild(scenes.Play.playerMoneyLabel);
                    this.addChild(scenes.Play.currentBetLabel);
                    this.addChild(this.bet1Button);
                    this.addChild(this.bet5Button);
                    this.addChild(this.bet10Button);
                    this.addChild(this.bet100Button);
                    this.addChild(this.resetButton);
                    this.addChild(this.quitButton);
                    this.addChild(scenes.Play.jackpotLabel);
                    for (var i = 0; i < 5; i++) {
                        this.addChild(scenes.Play.jackpotLights[i]);
                    }
                }
                if (scenes.Play.moneyChanged) {
                    this.removeChild(scenes.Play.playerMoneyLabel);
                    scenes.Play.playerMoneyLabel = new objects.Label("Money: $" + scenes.Play.playerMoney, "35px", "Consolas", "#FFFFFF", 30, 550, false);
                    this.addChild(scenes.Play.playerMoneyLabel);
                    this.removeChild(scenes.Play.currentBetLabel);
                    scenes.Play.currentBetLabel = new objects.Label("Bet: $" + scenes.Play.currentBet, "35px", "Consolas", "#FFFFFF", 30, 600, false);
                    this.addChild(scenes.Play.currentBetLabel);
                    this.removeChild(scenes.Play.jackpotLabel);
                    scenes.Play.jackpot = scenes.Play.currentBet * 100;
                    scenes.Play.jackpotLabel = new objects.Label("JACKPOT $" + scenes.Play.jackpot, "55px", "Consolas", "#FFFFFF", 300, 30, false);
                    this.addChild(scenes.Play.jackpotLabel);
                    scenes.Play.moneyChanged = false;
                    this.checkGameOver();
                    scenes.Play.spun = false;
                }
            }
        };
        Play.prototype.Main = function () {
            var _this = this;
            var _a;
            this.DrawMachine();
            this.ResetGame();
            this.spinButton.on("click", this.SpinMachine);
            // BET BUTTONS
            this.bet1Button.on("click", this.Bet1);
            this.bet5Button.on("click", this.Bet5);
            this.bet10Button.on("click", this.Bet10);
            this.bet100Button.on("click", this.Bet100);
            this.resetButton.on("click", this.ResetGame);
            this.quitButton.on("click", function () {
                for (var i = 0; i < 3; i++) {
                    _this.removeChild(scenes.Play.slot[i]);
                }
                scenes.Play.slot = [new createjs.Bitmap("./Assets/images/spin.png"), new createjs.Bitmap("./Assets/images/spin.png"), new createjs.Bitmap("./Assets/images/spin.png")];
                for (var i = 0; i < 3; i++) {
                    _this.addChild(scenes.Play.slot[i]);
                }
                config.Game.SCENE_STATE = scenes.State.END;
            });
            var cheatButton = document.getElementById("cheatButton");
            if (cheatButton) {
                cheatButton.style.visibility = "visible";
            }
            var jackpotCheat = document.getElementById("jackpotCheat");
            (_a = jackpotCheat) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                var _a;
                scenes.Play.winJackpot = (_a = jackpotCheat) === null || _a === void 0 ? void 0 : _a.checked;
            });
        };
        Play.prototype.checkGameOver = function () {
            if (scenes.Play.spun && scenes.Play.playerMoney == 0) {
                for (var i = 0; i < 3; i++) {
                    this.removeChild(scenes.Play.slot[i]);
                }
                scenes.Play.slot = [new createjs.Bitmap("./Assets/images/spin.png"), new createjs.Bitmap("./Assets/images/spin.png"), new createjs.Bitmap("./Assets/images/spin.png")];
                for (var i = 0; i < 3; i++) {
                    this.addChild(scenes.Play.slot[i]);
                }
                config.Game.SCENE_STATE = scenes.State.END;
            }
        };
        Play.prototype.DrawMachine = function () {
            scenes.Play.slot[0].x = 35;
            scenes.Play.slot[0].y = 115;
            scenes.Play.slot[1].x = 350;
            scenes.Play.slot[1].y = 115;
            scenes.Play.slot[2].x = 660;
            scenes.Play.slot[2].y = 115;
            this.addChild(scenes.Play.slot[0]);
            this.addChild(scenes.Play.slot[1]);
            this.addChild(scenes.Play.slot[2]);
            this.addChild(this.slotMachineImage);
            this.addChild(this.spinButton);
            this.addChild(scenes.Play.playerMoneyLabel);
            this.addChild(scenes.Play.currentBetLabel);
            this.addChild(this.bet1Button);
            this.addChild(this.bet5Button);
            this.addChild(this.bet10Button);
            this.addChild(this.bet100Button);
            this.addChild(this.resetButton);
            this.addChild(this.quitButton);
            this.addChild(scenes.Play.jackpotLabel);
            scenes.Play.jackpotLights[0] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 70, 55, true);
            scenes.Play.jackpotLights[1] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 150, 55, true);
            scenes.Play.jackpotLights[2] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 230, 55, true);
            scenes.Play.jackpotLights[3] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 820, 55, true);
            scenes.Play.jackpotLights[4] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 900, 55, true);
            for (var i = 0; i < 5; i++) {
                this.addChild(scenes.Play.jackpotLights[i]);
            }
        };
        Play.prototype.ResetGame = function () {
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
            this.DrawMachine();
        };
        Play.prototype.Bet1 = function () {
            if (scenes.Play.playerMoney < 1) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 1;
            scenes.Play.currentBet += 1;
            scenes.Play.moneyChanged = true;
        };
        Play.prototype.Bet5 = function () {
            if (scenes.Play.playerMoney < 5) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 5;
            scenes.Play.currentBet += 5;
            scenes.Play.moneyChanged = true;
        };
        Play.prototype.Bet10 = function () {
            if (scenes.Play.playerMoney < 10) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 10;
            scenes.Play.currentBet += 10;
            scenes.Play.moneyChanged = true;
        };
        Play.prototype.Bet100 = function () {
            if (scenes.Play.playerMoney < 100) {
                alert("Not enough money");
                return;
            }
            scenes.Play.playerMoney -= 100;
            scenes.Play.currentBet += 100;
            scenes.Play.moneyChanged = true;
        };
        Play.prototype.SpinMachine = function () {
            if (scenes.Play.jackpotWon) {
                scenes.Play.jackpotWon = false;
                scenes.Play.jackpotLights[0] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 70, 55, true);
                scenes.Play.jackpotLights[1] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 150, 55, true);
                scenes.Play.jackpotLights[2] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 230, 55, true);
                scenes.Play.jackpotLights[3] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 820, 55, true);
                scenes.Play.jackpotLights[4] = new objects.JackpotLight("./Assets/images/jackpotGrey.png", 900, 55, true);
            }
            console.log("SPUN");
            scenes.Play.spinResult = scenes.Play.Reels();
            console.log(scenes.Play.spinResult);
            scenes.Play.determineWinnings();
            scenes.Play.playerMoney += scenes.Play.winnings;
            scenes.Play.currentBet = 0;
            scenes.Play.moneyChanged = true;
        };
        // FUNCTIONS FROM "main.js" IN "slotmachine-master" (converted into TS and slightly altered)
        /* Utility function to check if a value falls within a range of bounds */
        Play.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return -1;
            }
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        Play.Reels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                if (scenes.Play.winJackpot) {
                    outCome[spin] = 65;
                }
                else {
                    outCome[spin] = Math.floor((Math.random() * 65) + 1);
                }
                //console.log(outCome[spin]);
                switch (outCome[spin]) {
                    case this.checkRange(outCome[spin], 1, 27): // 41.5% probability
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
            scenes.Play.spun = true;
            scenes.Play.isSpinning = true;
            return betLine;
        };
        /* This function calculates the player's winnings, if any */
        Play.determineWinnings = function () {
            var blanks = 0;
            var grapes = 0;
            var bananas = 0;
            var oranges = 0;
            var cherries = 0;
            var bars = 0;
            var bells = 0;
            var sevens = 0;
            for (var i = 0; i < 3; i++) {
                switch (scenes.Play.spinResult[i]) {
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
            if (blanks == 0) {
                if (grapes == 3) {
                    scenes.Play.winnings = scenes.Play.currentBet * 10;
                }
                else if (bananas == 3) {
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
                    scenes.Play.jackpotWon = true;
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
            }
            else {
                scenes.Play.lossNumber++;
                scenes.Play.winnings = 0;
            }
        };
        // PRIVATE INSTANCE MEMBERS
        // slot-machine variables
        Play.grapes = 0;
        Play.bananas = 0;
        Play.oranges = 0;
        Play.cherries = 0;
        Play.bars = 0;
        Play.bells = 0;
        Play.sevens = 0;
        Play.blanks = 0;
        // money + bets
        Play.playerMoney = 1000;
        Play.moneyChanged = false;
        Play.currentBet = 0;
        Play.winnings = 0;
        Play.winNumber = 0;
        Play.lossNumber = 0;
        Play.jackpot = 0;
        Play.winJackpot = false;
        // jackpot animation
        Play.jackpotLights = [new objects.JackpotLight(), new objects.JackpotLight(), new objects.JackpotLight(), new objects.JackpotLight(), new objects.JackpotLight()];
        Play.jackpotWon = false;
        Play.toggle = false;
        Play.toggleCounter = 0;
        // spin result
        Play.spinResult = ["", "", ""];
        // reel images
        Play.spun = false;
        Play.slot = [new createjs.Bitmap("./Assets/images/spin.png"), new createjs.Bitmap("./Assets/images/spin.png"), new createjs.Bitmap("./Assets/images/spin.png")];
        Play.isSpinning = false;
        Play.images = ["./Assets/images/spin.png", "./Assets/images/Banana.png", "./Assets/images/Bell.png",
            "./Assets/images/blank.png", "./Assets/images/Cherry.png", "./Assets/images/Grapes.png",
            "./Assets/images/Orange.png", "./Assets/images/Seven.png"];
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map