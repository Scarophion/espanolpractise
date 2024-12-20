var words = undefined;
var myAnswer; 
var spanishToEnglish;
var lblWord;
var lblDescription;

function initialiseWords(data) {
	createCheckBoxes(data);
	setWords(data);
	myAnswer = document.getElementById("txtAnswer");
	spanishToEnglish = document.getElementById("chkSpanish");
	lblWord = document.getElementById("lblWord");
	lblDescription = document.getElementById("lblDescription");
	next();
};

function createCheckBoxes(data) {
	var chkDiv = document.getElementById("wordSelect");
	data.forEach((collection) => {
		var chkBox = '<div><input type="checkbox" id="chk' + collection.name + '" value="' + collection.name + '" checked onclick="setWords(data);" /><label for="chk' + collection.name + '">' + collection.name + '</span></div>';
		chkDiv.innerHTML += chkBox;
	});
};

function activeCollections() {
	var chkDiv = document.getElementById("wordSelect");
	var checkBoxes = chkDiv.querySelectorAll("input");
	var collections = [];
	checkBoxes.forEach((checkBox) => {
		if (checkBox.checked) {
			collections.push(checkBox.value);
		}
	});
	return collections;
}

function setWords(data) {
	var collectionNames = activeCollections();
	var selectedWords = [];
	data.forEach((collection) => {
		if (collectionNames.includes(collection.name)) {
			selectedWords.push(...collection.words);
		}
	});

	words = selectedWords;
}

function check() {
	if (myAnswer.value === "") {
		myAnswer.parentElement.classList.remove("correct");
		myAnswer.parentElement.classList.remove("wrong");
	} else {
		myAnswer.value = myAnswer.value.toLowerCase(); // for mobile capitalisation
		if (myAnswer.value.localeCompare(getAnswer()) == 0) {
			myAnswer.parentElement.classList.add("correct");
			myAnswer.parentElement.classList.remove("wrong");
		} else {
			myAnswer.parentElement.classList.remove("correct");
			myAnswer.parentElement.classList.add("wrong");
		}
	}
}

function reveal() {
	check();
	myAnswer.parentElement.classList.remove("correct");
	myAnswer.parentElement.classList.remove("wrong");
	myAnswer.value = getAnswer();
}

function next() {
	var index = Math.floor(Math.random() * words.length);
	var thisWord = words[index];

	if (thisWord == undefined) {
		console.log(word + " " + index + " undefined!");
	}
	else {
		myAnswer.value = "";
		myAnswer.dataset.english = thisWord.english;
		myAnswer.dataset.espanol = thisWord.espanol;
		myAnswer.parentElement.classList.remove("correct");
		myAnswer.parentElement.classList.remove("wrong");
		myAnswer.focus();

		if (spanishToEnglish.checked) {
			lblWord.innerHTML = thisWord.espanol;
		}
		else {
			lblWord.innerHTML = thisWord.english;
			lblDescription.innerHTML = thisWord.enDesc == undefined ? "" : thisWord.enDesc;
		}
	}
}

function insert(character) {
	myAnswer.value +=character;
	myAnswer.focus();
}

function swapLanguage() {
	myAnswer.value = "";
	myAnswer.parentElement.classList.remove("correct");
	myAnswer.parentElement.classList.remove("wrong");

	if (spanishToEnglish.checked) {
		lblWord.innerHTML = myAnswer.dataset.espanol;
	}
	else {
		lblWord.innerHTML = myAnswer.dataset.english;
	}
}

function getAnswer() {
	return spanishToEnglish.checked ? myAnswer.dataset.english : myAnswer.dataset.espanol;
}

function answerKeyDown(event) {
	if (event.keyCode === 13) {
		check();
	}
}