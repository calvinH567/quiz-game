class Question {
    constructor(){
        this.title = createElement();
        this.option1 = createElement();
        this.option2 = createElement();

        this.input1 = createInput("Your Answer");
        
        this.input2 = createInput("Name!");
        this.button = createButton("Submit Here");
    }

    display(){
        this.title.html("What has  2 E's, but only has 1 letter?");
        this.title.position(150,80);

        this.option1.html("1.Everyone");
        this.option1.position(350,100);

        this.option2.html("2.Envelope");
        this.option2.position(350,120);

        
        
        this.input1.position(350,230);
        this.input2.position(350,330);
        this.button.position(350,400);

        this.button.mousePressed(()=>{

            this.hideAll();
            player.answer=this.input1.value();
            player.name=this.input2.value();
            contestantCount +=1;
            player.index = contestantCount;
            player.update();
            player.updateCount(player.index);
        })
        
        
    }
    hideAll(){
        this.input1.hide();
        this.option1.hide();
        this.option2.hide();
        this.title.hide();
    }
}