var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    /*Retire a linha de comentário errada*/
   canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    //canvas.getEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    /*
    Crie um event listener para "mousemove"
    e chame a função my_mousemove
    */

    function my_mousemove(e)
    {
        /*Retire a linha de comentário errada*/
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseX = e.clientX - canvas.offsetRight;
        //currentPositionOfMouseX = e.clientX - canvas.offsetBottom;

        
        canvas.addEventListener("mouseUP", my_mouseUP);

        
        canvas.addEventListener("mouseleave", my_mouseleave);
        
        /*

        crie currentPositionOfMouseY and
        assign it e.clientY - canvas.offsetTop;
        */

        if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }


   
    
    /*Crie uma event listener para "mouseleave"
    e chame a função my_mouseleave

    Crie uma função chamada my_mouseleave com event de parâmetro.
    
    Atribua "mouseleave" ao mouseEvent
    dentro da função
    */

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
