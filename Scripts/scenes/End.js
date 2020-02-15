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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function End() {
            var _this = _super.call(this) || this;
            _this.flicker = 0;
            // initialization
            _this.endScreen = new createjs.Bitmap("./Assets/images/endScene.png");
            _this.message1 = new objects.Label("GAME OVER", "50px", "Consolas", "#FFFF00", 480, 580, true);
            _this.message2 = new objects.Label("CLICK ANYWHERE TO REENTER", "35px", "Consolas", "#FFFF00", 480, 680, true);
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        End.prototype.Start = function () {
            this.Main();
        };
        End.prototype.Update = function () {
            if (this.flicker < 50) {
                this.message1.alpha -= 0.02;
                this.message2.alpha -= 0.02;
                this.flicker++;
            }
            else {
                this.message1.alpha += 0.02;
                this.message2.alpha += 0.02;
                this.flicker++;
                if (this.flicker == 100) {
                    this.flicker = 0;
                }
            }
        };
        End.prototype.Main = function () {
            var cheatButton = document.getElementById("cheatButton");
            if (cheatButton) {
                cheatButton.style.visibility = "hidden";
            }
            this.addChild(this.endScreen);
            this.addChild(this.message1);
            this.addChild(this.message2);
            this.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map