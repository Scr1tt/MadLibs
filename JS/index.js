console.log ("Hello World")

const typeOfBirdInput = document.getElementById('typeOfBird');
const typeOfBird = typeOfBirdInput.value;

const roomateNameInput = document.getElementById('roomateName');
const roomateName = roomateNameInput.value;

const nounInput = document.getElementById('noun');
const noun = nounInput.value;

const liquidInput = document.getElementById('liquid');
const liquid = liquidInput.value;

const bodyPartInput = document.getElementById('bodyPart');
const bodyPart = bodyPartInput.value;

// const outputElement = ;
const madLibs = `${typeOfBird}`
const madLibsElement = document.getElementById('madlibs');
madLibsElement.textContent = madLibs;

