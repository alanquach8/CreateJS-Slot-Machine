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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            _this.flicker = 0;
            // initialization
            _this.startScreen = new createjs.Bitmap("./Assets/images/startScreen.png");
            _this.message = new objects.Label("CLICK ANYWHERE TO PLAY", "50px", "Consolas", "#FFFF00", 480, 680, true);
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            this.Main();
        };
        Start.prototype.Update = function () {
            if (this.flicker < 50) {
                this.message.alpha -= 0.02;
                this.flicker++;
            }
            else {
                this.message.alpha += 0.02;
                this.flicker++;
                if (this.flicker == 100) {
                    this.flicker = 0;
                }
            }
        };
        Start.prototype.Main = function () {
            this.addChild(this.startScreen);
            this.addChild(this.message);
            this.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map