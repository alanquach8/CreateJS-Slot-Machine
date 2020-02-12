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
            _this.spinResult = [" ", " ", " "];
            // initialization
            _this.playLabel = new objects.Label();
            //this.nextButton = new objects.Button();
            _this.spinButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this.playLabel = new objects.Label("Play Label", "80px", "Consolas", "#000000", 320, 200, true);
            //this.nextButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this.spinButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            this.addChild(this.playLabel);
            this.addChild(this.spinButton);
            this.spinButton.on("click", this.SpinMachine);
            //this.addChild(this.nextButton);
            // this.nextButton.on("click", function() {
            //    //console.log("Start Clicked!");
            //    config.Game.SCENE_STATE = scenes.State.END;
            // });
        };
        Play.prototype.SpinMachine = function () {
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
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                console.log(outCome[spin]);
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
            return betLine;
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
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map