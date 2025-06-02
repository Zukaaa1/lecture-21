// ? anonymus funciton
// let myObj = {
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// myObj.sayHello();

// ?
// function sayHello(usernameOne, usernameTwo) {
//   console.log(usernameOne);
//   console.log("Hello");
// }

// sayHello("Zura", "Minda");

// ? Loops

// ? While

// * 1. შევქმნათ ცვლადი და იყოს რიცხვი 0
// * 2. გადავცემთ შედარების ოპერატორს ან უბრალოდ true/false-ს whiles
// * while(true)

// ! Examples Of Loops
// TODO -------- EXAMPLE 1
//let num = 0;
//      0 < 5?
//      1 < 5?
//      2 < 5?
//      3 < 5?
//      4 < 5?
// while (num < 5) {
//   console.log(num);
//   num = num + 1;
// }

//TODO --------- EXAMPLE WITH WHILE

// let index = 0;
// let myFriendList = [
//   "Ani",
//   "Giorgi",
//   "Beka",
//   "Mari",
//   "Saba",
//   "Merabi",
//   "Mindia",
// ];
// while (index < myFriendList.length) {
//   console.log(myFriendList[index]);
//   index = index + 1;
// }

// TODO -------- EXAMPLE WITH FOR

// let myFriendList = [
//   "Ani",
//   "Giorgi",
//   "Beka",
//   "Mari",
//   "Saba",
//   "Merabi",
//   "Mindia",
// ];
//                                              | index = index + 1 // index++ // index+ = 1
// for (let index = 0; index < myFriendList.length; index++) {
//   console.log(myFriendList[index]);
// }

// TODO -------- EXAMPLE WITH .foreach

// let myFriendList = [
//   "Ani",
//   "Giorgi",
//   "Beka",
//   "Mari",
//   "Saba",
//   "Merabi",
//   "Mindia",
// ];
//                              Ani       0
//                             Giorgi     1
//                              Beka      2
// myFriendList.forEach(function (element, index) {
//   console.log(
//     `პიროვნება სახელად ${element} არის ჩემს სიაში ინდექსად: ${index}`
//   );
//   console.log(index);
// });

// !

const homeworks = [
  {
    title: "Student Grades",
    description:
      "Display a list of students with their grades and highlight those with a grade of A.",
    example: "John - A, Sarah - B, Mark - A",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
  {
    title: "Task Manager",
    description:
      "Create a task list from an array of tasks and mark completed tasks with a different color.",
    example: "Task 1: Complete, Task 2: Pending",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
  {
    title: "Online Store",
    description:
      "Display a list of products with their names, prices, and availability status.",
    example: "Product: Laptop, Price: $999, Status: In Stock",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
  {
    title: "Weather Report",
    description:
      "Show a list of cities with their current temperatures and weather conditions.",
    example: "City: New York, Temperature: 20°C, Condition: Sunny",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
  {
    title: "Contact List",
    description:
      "Generate a contact list from an array of people with their phone numbers and emails.",
    example: "John Doe - Phone: 123-456-7890, Email: john@example.com",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
  {
    title: "Contact List",
    description:
      "Generate a contact list from an array of people with their phone numbers and emails.",
    example: "John Doe - Phone: 123-456-7890, Email: john@example.com",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
  {
    title: "Contact List",
    description:
      "Generate a contact list from an array of people with their phone numbers and emails.",
    example: "John Doe - Phone: 123-456-7890, Email: john@example.com",
    url: "https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg",
  },
];

const homeworkContainer = document.querySelector("#homeworkContainer");

for (let index = 0; index < homeworks.length; index++) {
  const card = document.createElement("div");
  card.innerHTML = `
<div>
    <h3>${homeworks[index].title}</h3>
    <p>${homeworks[index].description}</p>
    <p>${homeworks[index].example}</p>
    <img class="dogImg" src="${homeworks[index].url}"/>
</div>>`;
  card.classList.add("card");

  homeworkContainer.appendChild(card);
}
// console.log(homeworks[0].description);
// console.log(homeworks[2].title);
// console.log(homeworks[4].example);
