var inputs,
	notes = {},
	debug = true;

/**
 * initialize app - detect MIDI devices and attach event handlers
 */
function init() {
	navigator.requestMIDIAccess().then(function(res){
		console.log(res.inputs());
		inputs = res.inputs();
		addDevices();

		if(debug === true) {
			inputs[3].onmidimessage = handleMidiMessage; 
		}
	});

	document.getElementById('selDevices').onchange = function(e) {
		console.log('changed');
		console.log(this.value);

		// remove any previously attached handlers
		inputs.forEach(function(item) {
			console.log(item);
			item.onmidimessage = null;
		});

		inputs[parseInt(this.value, 10)].onmidimessage = handleMidiMessage; 
	}
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
	console.log('el');
	el.innerHTML = notes; 
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
	if(note.data[0] == 254) {
		return;
	}
	console.log(note.data);
	console.log(convertCommand(note)); 
	var command = convertCommand(note); 
	notes[command.noteName + command.octave] = command.command;
	console.log('notes');
	console.log(notes);
	console.log(numberToNote(note.data[1]));
	console.log(printNotes().join(', '));
	displayNotes(printNotes().join(', '));
	var key = document.getElementById(numberToNote(note.data[1]).note);
	key.classList.toggle('pressed');
};

function convertCommand(command) {
	return {
		noteName: numberToNote(command.data[1]).note,
		octave: numberToNote(command.data[1]).octave,
		// true for note on, false for note off
		command: !!command.data[2]
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
