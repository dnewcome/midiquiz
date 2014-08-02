var answers = [];

function Quiz(root, dom) {
	this.dom = dom;
	this.step = 0;
	this.root = root;
	this.chords = ['maj', 'min', '7', 'maj', '7', 'min', 'dim'];
	this.notes = [0, 2, 4, 5, 7, 9, 11];
}

Quiz.prototype.next = function() {
	var idx = Math.floor(Math.random()*(this.chords.length));
	var ret = {
		type: this.chords[idx],
		root: this.notes[idx]
	};

	this.dom.innerHTML = numberToNote(ret.root).note + ' ' + ret.type;
	return ret;
}

