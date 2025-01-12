members = [
  {
    name: "Naya Begay",
    yearOfBirth: 2005,
  },
  {
    name: "Maria Alba",
    yearOfBirth: 2007,
  },
  {
    name: "Ankit Patel",
    yearOfBirth: 2010,
  },
  {
    name: "Mario Gomes",
    yearOfBirth: 1982,
  },
  {
    name: "Enzo Alvarez",
    yearOfBirth: 2018,
  },
  {
    name: "Jan Hansen",
    yearOfBirth: 1972,
  },
];

// use this variable to store the new array with 18+ years old members only
let adultMembers = members.filter((item) => item.yearOfBirth <= 2007);
console.log(adultMembers);
