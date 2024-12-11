var spanishToEnglish;
var lblSentence;
var regConj, verbGroups;
var question, answer, myAnswer, selectedVerbs;

function initialise(data) {
	regConj = data.regConj;
	verbGroups = data.verbGroups;
	createCheckBoxes(data.verbGroups);
	setVerbs(data.verbGroups);

	myAnswer = document.getElementById("txtAnswer");
	spanishToEnglish = document.getElementById("chkSpanish");
	lblSentence = document.getElementById("lblSentence");

	next();
};

function createCheckBoxes(data) {
	var chkDiv = document.getElementById("wordSelect");
	data.forEach((collection) => {
		var chkBox = '<div><input type="checkbox" id="chk' + collection.name + '" value="' + collection.name + '" checked disabled onclick="setVerbs(verbGroups);" /><label for="chk' + collection.name + '">' + collection.name + '</span></div>';
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

function setVerbs(verbGroups) {
	var collectionNames = activeCollections();
	var selectedWords = [];
	verbGroups.forEach((collection) => {
		if (collectionNames.includes(collection.name)) {
			selectedWords.push(...collection.verbs);
		}
	});

	selectedVerbs = selectedWords;
}

function check() {
	if (myAnswer.value === "") {
		myAnswer.parentElement.classList.remove("correct");
		myAnswer.parentElement.classList.remove("wrong");
	} else {
		if (myAnswer.value.toLowerCase().localeCompare(getAnswer().toLowerCase()) == 0) {
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
	var index = Math.floor(Math.random() * selectedVerbs.length);
	var thisVerb = selectedVerbs[index];

	if (thisVerb == undefined) {
		console.log(word + " " + index + " undefined!");
	}
	else {
		myAnswer.value = "";
		myAnswer.parentElement.classList.remove("correct");
		myAnswer.parentElement.classList.remove("wrong");

		// Generate english and spanish answers
		var newSentence = generateSentence(thisVerb);

		// Set in DOM
		myAnswer.dataset.english = newSentence.english;
		myAnswer.dataset.espanol = newSentence.espanol;

		lblSentence.innerHTML = spanishToEnglish.checked ? newSentence.espanol : newSentence.english;
		myAnswer.focus();

		// Text box width
		var width = '25ch';
		var senLength = newSentence.espanol > newSentence.english ? newSentence.espanol.length : newSentence.english.length;
		if (senLength > 25) {
			width = lblSentence.innerHTML.length + 'ch';
		}
		myAnswer.style["width"] = width;
	}
}

function generateSentence(thisVerb) {
	var newSentence = { "english": "", "espanol": "" };

	// Pick a subject
	var subjIndex = Math.floor(Math.random() * data.subjects.length);
	var thisSubject = data.subjects[subjIndex];

	// Pick the tense
	var tenseIndex = Math.floor(Math.random() * 3);

	// Get the verb bit
	var englishVerb = "";
	if (thisVerb.englishconj[tenseIndex].form.length == 1) {
		englishVerb = thisVerb.englishconj[tenseIndex].form[0];
	}
	else {
		englishVerb = thisVerb.englishconj[tenseIndex].form[subjIndex];
	}

	var spanishVerb = "";
	if (!thisVerb.irregular) {
		regConj.forEach((conjugation) => {
			if (conjugation.type == thisVerb.type)
				spanishVerb = thisVerb.root + conjugation.conjugation[tenseIndex].form[subjIndex];
		});
	}

	// Pick an ending
	var endingIndex = Math.floor(Math.random() * thisVerb.endings.length);
	var engEnding = thisVerb.endings[endingIndex].english;
	var espEnding = thisVerb.endings[endingIndex].espanol;

	// Construct sentences
	newSentence.english = thisSubject.english + " " + englishVerb + " " + engEnding;
	newSentence.espanol = thisSubject.espanol + " " + spanishVerb + " " + espEnding;

	return newSentence;
}

function insert(character) {
	myAnswer.value +=character;
	myAnswer.focus();
}

function swapLanguage() {
	myAnswer.value = "";
	myAnswer.parentElement.classList.remove("correct");
	myAnswer.parentElement.classList.remove("wrong");

	lblSentence.innerHTML = spanishToEnglish.checked ? myAnswer.dataset.espanol : myAnswer.dataset.english;

	// Text box width
	var width = '25ch';
	var senLength = myAnswer.dataset.espanol > myAnswer.dataset.english ? myAnswer.dataset.espanol.length : myAnswer.dataset.english.length;
	if (senLength > 25) {
		width = lblSentence.innerHTML.length + 'ch';
	}
	myAnswer.style["width"] = width;
}

function getAnswer() {
	return spanishToEnglish.checked ? myAnswer.dataset.english : myAnswer.dataset.espanol;
}

function answerKeyDown(event) {
	if (event.keyCode === 13) {
		check();
	}
}