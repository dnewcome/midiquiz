var answers = [];

function Quiz(root, dom) {
	this.dom = dom;
	this.step = 0;
	this.root = root;
	this.chords = ['Maj', 'min', '7', 'Maj', '7', 'min', 'dim'];
	this.degree = ['I', 'ii', 'III7', 'IV', 'V7', 'vi', 'VII'];
	this.notes = [0, 2, 4, 5, 7, 9, 11];
	this.current;
}

Quiz.prototype.next = function() {
	var idx = Math.floor(Math.random()*(this.chords.length));
	var ret = {
		type: this.chords[idx],
		root: this.notes[idx],
		degree: this.degree[idx]
	};

	this.dom.innerHTML = numberToNote(ret.root).note + ' ' + ret.type + ' (' + ret.degree + ')';
	this.current = numberToNote(ret.root).note + ret.type;
	return ret;
}

