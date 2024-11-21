import Cat from "./Cat.js";
class Kitten extends Cat {
  constructor() {
    super();
    console.log("\n inside Kitten Constructor");
  }
  //method overriding
  eatingBehaviour = () => {
    this.eatingBehaviour = "Kitten drinks only Milk";
    console.log(" Kitten drinks only Milk");
  };
  //method overloading
  sleepingBehaviour = () => {
    this.sleepingBehaviour = "Kitten sleeps a lot";
    console.log("Kitten sleeps on Pillows");
  };
  sleepingBehaviour = () => {
    this.sleepingBehaviour = "Kitten Sleeps on Trees";
    console.log("Kitten Sleeps on Trees");
  };
  sleepingBehaviour = () => {
    this.sleepingBehaviour = "Kitten Sleeps in the Lap of Humans";
    console.log("Kitten Sleeps in the Lap of Humans");
  };
}
export default Kitten;
