var words = undefined;
var myAnswer; 
var spanishToEnglish;
var lblWord;

function initialiseWords(someWords) {
	words = someWords;
	myAnswer = document.getElementById("txtAnswer");
	spanishToEnglish = document.getElementById("chkSpanish");
	lblWord = document.getElementById("lblWord");
	next();
};

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

		if (spanishToEnglish.checked) {
			lblWord.innerHTML = thisWord.espanol;
		}
		else {
			lblWord.innerHTML = thisWord.english;
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