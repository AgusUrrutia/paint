export class Pen {
    constructor(posX, posY, fill, context, estilo){
        this.antX = posX;
        this.antY = posY;
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.estilo = estilo;
    }

    moveTo(x, y){
        this.antX = this.posX;
        this.antY = this.posY;
        this.posX = x;
        this.posY = y;
    }
    

    draw(){
        this.strokeStyle = this.fill;
        this.context.moveTo(this.antX, this.antY);
        this.context.LineTo(this.posX, this.posY);
        this.context.stroke();
        
    }
}