var currentTxtBoxId = undefined;

function initialise(){
	createButtons();
	createTable(data.verbs[0]);
};

function createButtons(){
	var radioDiv = document.getElementById("verbSelect");
	data.verbs.forEach((verb, index) =>{
		var checked = "";
		if (verb == data.verbs[0]){
			checked = "checked";
		}
		var radio = '<input type="radio" name="verb" value="'+verb.name+'" '+checked+' onClick="changeVerb('+index+');" /><span>'+verb.name+'</span>';
		radioDiv.innerHTML += radio;
	});
};

function createTable(verb){
	var source = document.getElementById("verbTableTemplate").innerHTML;
    source = source.replace("{{verbName}}", verb.name);
    source = source.replace("{{verbDesc}}", verb.translation);
	
	var tenses = "";
	var yoConj = "";
	var tuConj = "";
	var elConj = "";
	var nosConj = "";
	var vosConj = "";
	var ellosConj = "";
	
	verb.conjugation.forEach((tense, index) =>{
		tenses += '<th>'+tense.tense+'</th>';
		yoConj += '<td><input id="conj'+index+'_'+0+'" type=text" data-answer="'+tense.form[0]+'" onfocus="currentTextBox(\'conj'+index+'_'+0+'\');" /><span class="hidden">'+tense.form[0]+'</span></td>';
		tuConj += '<td><input id="conj'+index+'_'+1+'" type=text" data-answer="'+tense.form[1]+'" onfocus="currentTextBox(\'conj'+index+'_'+1+'\');" /><span class="hidden">'+tense.form[1]+'</span></td>';
		elConj += '<td><input id="conj'+index+'_'+2+'" type=text" data-answer="'+tense.form[2]+'" onfocus="currentTextBox(\'conj'+index+'_'+2+'\');" /><span class="hidden">'+tense.form[2]+'</span></td>';
		nosConj += '<td><input id="conj'+index+'_'+3+'" type=text" data-answer="'+tense.form[3]+'" onfocus="currentTextBox(\'conj'+index+'_'+3+'\');" /><span class="hidden">'+tense.form[3]+'</span></td>';
		vosConj += '<td><input id="conj'+index+'_'+4+'" type=text" data-answer="'+tense.form[4]+'" onfocus="currentTextBox(\'conj'+index+'_'+4+'\');" /><span class="hidden">'+tense.form[4]+'</span></td>';
		ellosConj += '<td><input id="conj'+index+'_'+5+'" type=text" data-answer="'+tense.form[5]+'" onfocus="currentTextBox(\'conj'+index+'_'+5+'\');" /><span class="hidden">'+tense.form[5]+'</span></td>';
	});
	
    source = source.replace("{{tenses}}", tenses);
    source = source.replace("{{yo-conj}}", yoConj);
    source = source.replace("{{tu-conj}}", tuConj);
    source = source.replace("{{el-conj}}", elConj);
    source = source.replace("{{nos-conj}}", nosConj);
    source = source.replace("{{vos-conj}}", vosConj);
    source = source.replace("{{ellos-conj}}", ellosConj);
	
	var workingArea = document.getElementById("workingArea");
	workingArea.innerHTML = source;
}

function changeVerb(index){
	createTable(data.verbs[index]);
	hideAnswersButton();
}

function check(){	
    var table = document.getElementById("verbTable");
    var answers = table.querySelectorAll("input");
	answers.forEach((answer) => {
		if (answer.value === ""){
			answer.parentElement.classList.remove("correct");
			answer.parentElement.classList.remove("wrong");			
		} else if (answer.value == answer.dataset.answer){
			answer.parentElement.classList.add("correct");
			answer.parentElement.classList.remove("wrong");
		} else{
			answer.parentElement.classList.remove("correct");
			answer.parentElement.classList.add("wrong");
		}
	});
}

function reveal(){
	check();
    var table = document.getElementById("verbTable");
    var answers = table.querySelectorAll("input");
	answers.forEach((answer) => {
		answer.classList.add("hidden");
		answer.parentElement.querySelector("span").classList.remove("hidden");
	});
	document.getElementById("butReveal").classList.add("hidden");
	document.getElementById("butHideAnswers").classList.remove("hidden");
}

function reset(){
    var table = document.getElementById("verbTable");
    var answers = table.querySelectorAll("input");
	answers.forEach((answer) => {
		answer.value = "";
		answer.classList.remove("hidden");
		answer.parentElement.classList.remove("correct");
		answer.parentElement.classList.remove("wrong");
		answer.parentElement.querySelector("span").classList.add("hidden");
	});
	hideAnswersButton();
};

function hideAnswers(){
    var table = document.getElementById("verbTable");
    var answers = table.querySelectorAll("input");
	answers.forEach((answer) => {
		answer.classList.remove("hidden");
		answer.parentElement.querySelector("span").classList.add("hidden");
	});
	hideAnswersButton();
}

function insert(character){console.log(currentTxtBoxId);
	var txtBox = document.getElementById(currentTxtBoxId);
	txtBox.value +=character;
	txtBox.focus();
}

function hideAnswersButton(){	
	document.getElementById("butReveal").classList.remove("hidden");
	document.getElementById("butHideAnswers").classList.add("hidden");
}

function currentTextBox(txtBoxId){console.log(txtBoxId);
	currentTxtBoxId = txtBoxId;
}