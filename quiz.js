var inputs;

/**
 * initialize app - detect MIDI devices and attach event handlers
 */
function init() {
	navigator.requestMIDIAccess().then(function(res){
		console.log(res.inputs());
		inputs = res.inputs();
		addDevices();
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
	console.log(numberToNote(note.data[1]));
	var key = document.getElementById(numberToNote(note.data[1]));
	key.classList.toggle('pressed');
};

/**
 * Map MIDI note number to note name
 */
function numberToNote(num) {
	var note = num % 12;
	if(note === 0) {
		return "C";
	}
	else if(note === 1) {
		return "Csharp";
	}
	else if(note === 2) {
		return "D";
	}
	else if(note === 3) {
		return "Dsharp";
	}
	else if(note === 4) {
		return "E";
	}
	else if(note === 5) {
		return "F";
	}
	else if(note === 6) {
		return "Fsharp";
	}
	else if(note === 7) {
		return "G";
	}
	else if(note === 8) {
		return "Gsharp";
	}
	else if(note === 9) {
		return "A";
	}
	else if(note === 10) {
		return "Asharp";
	}
	else if(note === 11) {
		return "B";
	}
}
