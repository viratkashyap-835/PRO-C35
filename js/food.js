class Food{
    constructor(){
        this.foodstock=20;
        this.lastfeed=0;
        this.image=loadImage("images/Milk.png");
        database=firebase.database();

    }
    updatefoodstock(food){
        this.foodstock=food;
        database.ref("/").update({
            Food:food
        })

    }

    display(){
        var x=80,y=100;
        imageMode(CENTER);
        if(this.foodstock!==0){
            for(var i=0;i<this.foodstock;i++){
                if(i%10===0){
                    x=80;
                    y+=50;
                }
                image(this.image,x,y,50,50);
                x+=30;
            }
        }
    }
}