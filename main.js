/*
    1. Define a variable named `notes` and assign a value of an empty array

    2. Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
const notes = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Steve Stevenson",
    date: "2022-01-05",
    topics: ["Topic 1"],
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jacob Jacobson",
    date: "2020-02-24",
    topics: ["Topic 2"],
  },
  {
    id: 3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Tom Tomlinson",
    date: "2021-11-15",
    topics: ["Topic 3"],
  },
];
// 1. add at least 3 more notes to your array
// 2.This time you must use the .push method on the array to add them,
const newNote = {
  id: 4,
  text: "Mattis rhoncus urna neque viverra justo nec ultrices. ",
  author: "Victoria Victor",
  date: "2022-03-25",
  topics: ["Topic 4"],
};
const newerNote = {
  id: 5,
  text: "Porttitor leo a diam sollicitudin tempor id eu nisl.",
  author: "Adam Adamson",
  date: "2022-07-30",
  topics: ["Topic 5"],
};

const newestNote = {
  id: 6,
  text: "Sed libero enim sed faucibus turpis in eu mi.",
  author: "Pet Peterson",
  date: "2022-08-15",
  topics: ["Topic 6"],
};
notes.push(newNote);
notes.push(newerNote);
notes.push(newestNote);

// console.log(notes)

// 1. write a for..of loop inside of another one since the topics on each note is an array as well.

//Start with console.log("*** All Note Topics ***") and display each topic beneath it.
let stringOfTopics = "";
for (const note of notes) {
  for (const topic of note.topics) {
    stringOfTopics += topic;
  }
  stringOfTopics += "\n";
}
// console.log(stringOfTopics)

console.log(`*** All Note Topics *** \n${stringOfTopics}`);

/*
    1. Add a new section of output where you can see, on average, how many topics the author are applying to each post.
        A. I will need to create a for of loop
        b. I will need to capture how many topics total there are
        c. I will need to take the totoal topics and divid by the length of topics

    2. Start with console.log("*** Average Topics Per Note ***") and display the average numbers of topics used on all posts.
    */
console.log("*** Average Topics Per Note ***");
let totalNumberOfTopics = 0;
for (const note of notes) {
  totalNumberOfTopics += note.topics.length;
}
let averageOfTopics = totalNumberOfTopics / notes.length;

console.log(averageOfTopics);

/*
    1. Create a new variable called filteredNotes with an empty array as its initial value.
    2. Create a new variable called criteria the contains a string of the topic by which you want to filter the notes.
    3. Iterate the notes array and check if the criteria is in the topics array property and add the current object to the filteredNotes array
    4. consol.log filteredNotes
*/
const filteredNotes = [];
const criteria = "Topic 4";

for (const note of notes) {
  if (note.topics.includes(`${criteria}`)) {
    filteredNotes.push(note);
  }
}
console.log(`*** Notes with the ${criteria} Topic`);
console.log(filteredNotes);
/*
// console.log(`*** Notes with the ${criteria} Topic *** \n ${filteredNotes}`);

/*
    1. I need to loop through the array of objects
    2. I need to capture the data located in the key vaule pair "text"
    3. I need to save that information to a variable
    4. I need to console log that variable with the HTML tag <article></article>
*/
console.log("*** Note Articles ***");
let stringOfText = [];
for (const note of notes) {
  stringOfText.push(`<article>${note.text}</article>`);
}
console.log(stringOfText);
