class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        // Checks when a key is being pressed 
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        // Switch cases for all arrow directions for pressing key down
        document.onkeydown=(event)=> {
            switch(event.key) {
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break; 
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            console.table(this);
        }

        // Switch cases for all arrow directions for when key is up
        document.onkeyup=(event)=> {
            switch(event.key) {
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break; 
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            console.table(this);
        }
    }
}
