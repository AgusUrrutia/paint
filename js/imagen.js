export default class Imagen {
    constructor(context, cWidth, cHeight, tImg){
        this.context = context;
        this.cWidth = cWidth;
        this.cHeight = cHeight;
        this.tImg = tImg;
    }

    moveTo(x, y){
        this.antX = this.posX;
        this.antY = this.posY;
        this.posX = x;
        this.posY = y;
    }
    

    crearImagen(e){
        let img = new Image();
        img.src = URL.createObjectURL(e.target.files[0]);
        let originWidth = this.cWidth;
        let originHeight = this.cHeight;
        let ctx = this.context;
        let tImagen = this.tImg;
        img.onload = function(){
            let canvasWidth = originWidth;
            let canvasHeigth = originHeight;
            let imgWidth = (this.width * tImagen) * (canvasWidth / 1215) ;
            let imgHeigth = (this.height * tImagen) * (canvasWidth / 1215);

            console.log(this.width);
            console.log(img.width);

            ctx.drawImage(this, (canvasWidth / 2) - (imgWidth / 2), (canvasHeigth / 2)  - (imgHeigth / 2),imgWidth ,imgHeigth);
            // ctx.drawImage(img, 0, 0,imgWidth ,imgHeigth);
        }
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