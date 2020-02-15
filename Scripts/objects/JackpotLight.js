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
var objects;
(function (objects) {
    var JackpotLight = /** @class */ (function (_super) {
        __extends(JackpotLight, _super);
        // constructor
        function JackpotLight(imagePath, x, y, isCentered) {
            if (imagePath === void 0) { imagePath = "./Assets/images/jackpotGrey.png"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = true; }
            return _super.call(this, imagePath, x, y, isCentered) || this;
        }
        // PRIVATE LIFE CYCLE METHODS
        JackpotLight.prototype._checkBounds = function () {
        };
        // PUBLIC METHODS
        JackpotLight.prototype.Start = function () {
        };
        JackpotLight.prototype.Update = function () {
        };
        JackpotLight.prototype.Reset = function () {
        };
        return JackpotLight;
    }(objects.GameObject));
    objects.JackpotLight = JackpotLight;
})(objects || (objects = {}));
//# sourceMappingURL=JackpotLight.js.map