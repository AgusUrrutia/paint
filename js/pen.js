export default class Pen {
    constructor(posX, posY, fill, context, estilo, width, ){
        this.antX = posX;
        this.antY = posY;
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.estilo = estilo;
        this.width = width;
    }

    moveTo(x, y){
        this.antX = this.posX;
        this.antY = this.posY;
        this.posX = x;
        this.posY = y;
    }
    

    draw(){
        this.context.beginPath();
        if(this.estilo == "circulo"){
            this.context.strokeStyle = this.fill;
            this.context.lineWidth = this.width;
            this.context.lineCap = 'round';
            this.context.moveTo(this.antX, this.antY);
            this.context.lineTo(this.posX, this.posY);   
        }
        if (this.estilo == "cuadrado") {
            this.context.fillRect(this.posX - (this.width / 2), this.posY - (this.width / 2), this.width, this.width);
        }
        this.context.stroke();
        this.context.closePath();
    }
}