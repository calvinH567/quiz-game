class Question {
    constructor(){
        this.title = createElement();
        this.option1 = createElement();
        this.option2 = createElement();

        this.input1 = createInput();
    }

    display(){
        this.title.html("What has  2 E's, but only has 1 letter?");
        this.title.position(150,80);

        this.option1.html("1.Everyone");
        this.option1.position(350,100);

        this.option2.html("2.Envelope");
        this.option2.position(350,120);

        
        
        this.input1.position(350,230);
    }
}