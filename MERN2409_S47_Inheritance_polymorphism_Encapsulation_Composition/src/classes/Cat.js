class Cat {
  constructor() {
    console.log("inside Cat Constructor");
    this.NoOfLegs = 4;
    this.NoOftails = 1;
    this.NoOfEyes = 2;
  }
  eatingBehaviour = () => {
    this.eatingBehaviour = "Cat hunts Rats And Drinks Milk";
    console.log("Cat hunts Rats And Drinks Milk");
  };
  sleepingBehaviour = () => {
    this.sleepingBehaviour = "Cat sleeps for 16 hours a day";
    console.log("Cat sleeps on Trees and Corners");
  };
  facinghumanBehaviour = () => {
    this.facinghumanBehaviour =
      "Cat is a pet animal and is very friendly to humans";
    console.log("Cat runs away from humans");
  };
}
export default Cat;
