module objects {

    export class JackpotLight extends GameObject {
        // constructor
        constructor(
            imagePath:string = "./Assets/images/jackpotGrey.png", 
            x:number = 0, y:number = 0, isCentered:boolean = true)
        {
            super(imagePath, x, y, isCentered);
        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds():void
        {

        }

        // PUBLIC METHODS
        public Start():void
        {

        }

        public Update():void
        {
            
        }

        public Reset():void
        {

        }
    }
}