// ## Defining classes
//
// - What is it? What does it do?
// Constructor:
// What is it? - It's a Building
// What does it have? It has floors.
function Building(floors){
  // this = {}
  this.what = "building";
  this.floors = floors;
  // returns "this" in the background
}

// Our properties are key value pairs

// Designing o pseudo class

//instance
let myHouse = new Building(3)
// this results that the properties of the house is
// myHouse.what = "building"
// myHouse.floors = 3
// {what: "building", "floors": 3}

//Method (for all instances)
Building.prototype.countFloors = function(){
  console.log("I have ", this.floors, ' floors');
};
