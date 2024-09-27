let person1 = {
  name: "Nina",
  age: 29,
  height: 167,
  favouriteColour: "purple",
};

let person2 = person1;

person2.name = "Charles";
person2.age = 38;
person2.height = 163;
person2.favouriteColour = "orange";

let person3 = person1;

person3.name = "Henrietta";
person3.age = 41;
person3.height = 183;
person3.favouriteColour = "green";

let list = [person1, person2, person3].sort((a, b) => {
  return a.height - b.height;
});

// What are the results of the next two logs?
console.log(list[0].name);
console.log(list[1].name);
