// window.addEventListener(onload, ()=>{

    
    const animationStates = {
        // tired: "assets/sprite_sheet_idle1.png",
        // yawn: "assets/sprite_sheet_idle2.png",
        run: "assets/sprite_sheet_run2.png",
    };

    let playerState = "run";
    
    let playerImage = new Image();
    playerImage.src = animationStates[playerState];

    const selector = document.getElementById("animations");
    // selector.addEventListener('change', function(e){
    //     playerState = e.target.value;
    //      playerImage.src = animationStates[playerState];
    //     })

    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = canvas.width = 728;
    const CANVAS_HEIGHT = canvas.height = 468;
    
    initialCanvasPosition = window.innerWidth - window.innerWidth*0.14;
    canvasPosition = initialCanvasPosition;
    canvas.style.left = canvasPosition +"px";

    const spriteWidth = 728;
    const spriteHeight = 468;
    let numberOfFrames = 7;
    let gameFrame =0;
    let frameChangeInterval = 7;
    let frameX= 0;
    
    function animate(){
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(
            playerImage,
             frameX * spriteWidth, 
             0, spriteWidth, 
             spriteHeight, 0, 0, spriteWidth, spriteHeight
             );
             
        if(gameFrame % frameChangeInterval === 0) {
            
            if(frameX < numberOfFrames){
               frameX++;
            }else {
               frameX=0;
            }
        }
        
        if(canvasPosition < (window.innerWidth - window.innerWidth*1.25)){
            canvasPosition = initialCanvasPosition;
        }

        canvasPosition -= 0.4;
        canvas.style.left = canvasPosition +"px";
        gameFrame++;
        requestAnimationFrame(animate);
    }

    animate();


// })