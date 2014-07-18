var inputs,
	notes = [],
	debug = false,
	trace = false;

/**
 * initialize app - detect MIDI devices and attach event handlers
 */
function init() {
	navigator.requestMIDIAccess().then(function(res){
		inputs = res.inputs();
		addDevices();

		// auto connect for convenience
		if(debug === true) {
			inputs[0].onmidimessage = handleMidiMessage; 
		}
	});

	document.getElementById('selDevices').onchange = function(e) {
		// remove any previously attached handlers
		inputs.forEach(function(item) {
			item.onmidimessage = null;
		});

		inputs[parseInt(this.value, 10)].onmidimessage = handleMidiMessage; 
	}
}

/**
 * Notes is an array of midi note numbers
 * in a chord
 */
function findChord(notes) {
	var intervals = [0],
		i;
	notes = notes.sort();
	for(i=1; i < notes.length; i++) {
		intervals.push(notes[i] - notes[0]);			
	}
	
	return intervals;
}

function printNotes() {
	var ret = [];
	for(note in notes) {
		if(notes[note]) {
			ret.push(note);
		}	
	}
	return ret;
}

function displayNotes(notes) {
	var el = document.getElementById('notes-played');
	el.innerHTML = notes; 
}

function displayChord(chord) {
	var el = document.getElementById('chord-played');
	el.innerHTML = chord; 
}

/**
 * Add detected MIDI devices to the dropdown list
 */
function addDevices() {
	var i,
		select = document.getElementById('selDevices'),
		option;

	for(i = 0; i < inputs.length; i++) {
		option = document.createElement('option');				
		option.text = inputs[i].name;
		option.value = i; 
		select.add(option);	
	}
}

/**
 * event handler for incoming MIDI data stream
 */
function handleMidiMessage(note) {
	// filter active sense messages
	if(note.data[0] == 254) {
		return;
	}

	if (trace) {
		console.log(note.data);
	}

	console.log(convertCommand(note)); 
	var command = convertCommand(note); 
	// notes[command.noteName + command.octave] = {number: note.data[1], playing: command.command};
	notes[note.data[1]] = command.command;
	console.log(notes);
	displayNotes(printNotes().join(', '));
	// displayChord(numberToNote(printNotes()[0]).note + search(findChord(printNotes())));
	if(search(findChord(printNotes()))) {
		displayChord(numberToNote(printNotes()[0]).note + search(findChord(printNotes())));
	}
	else {
		displayChord('');
	}
	// var key = document.getElementById(numberToNote(note.data[1]).note);
	var key = document.querySelector(
		'#octave' + numberToNote(note.data[1]).octave + ' #' +
		numberToNote(note.data[1]).note
	);
	key.classList.toggle('pressed');
};

function getLowestNote() {

}

function convertCommand(command) {
	var onoff = true;
	if((0xF0 & command.data[0]) == 128 || command.data[2] == 0) {
		onoff = false;
	}
	return {
		noteName: numberToNote(command.data[1]).note,
		octave: numberToNote(command.data[1]).octave,
		// true for note on, false for note off
		command: onoff
	};
}

/**
 * Map MIDI note number to note name
 */
function numberToNote(num) {
	var note = num % 12;
	var octave = Math.floor(num / 12) - 1;
	var ret = "";
	if(note === 0) {
		ret =  "C";
	}
	else if(note === 1) {
		ret =  "Csharp";
	}
	else if(note === 2) {
		ret =  "D";
	}
	else if(note === 3) {
		ret =  "Dsharp";
	}
	else if(note === 4) {
		ret =  "E";
	}
	else if(note === 5) {
		ret =  "F";
	}
	else if(note === 6) {
		ret =  "Fsharp";
	}
	else if(note === 7) {
		ret =  "G";
	}
	else if(note === 8) {
		ret =  "Gsharp";
	}
	else if(note === 9) {
		ret =  "A";
	}
	else if(note === 10) {
		ret =  "Asharp";
	}
	else if(note === 11) {
		ret =  "B";
	}
	return {note: ret, octave: octave};
}
