/**
 * Given an array of intervals, find
 * matching chord
 */
var trie = {
	value: 0,
	chord: null,
	children: [
		{
			value: 3,
			chord: null,
			children: [
				{
					value: 7,
					chord: 'min',
					children: []
				},
				{
					value: 6,
					chord: 'dim',
					children: []
				}
			]
		},
		{
			value: 4,
			chord: null,
			children: [
				{
					value: 7,
					chord: 'maj',
					children: []
				},
				{
					value: 8,
					chord: 'aug',
					children: []
				}
			]
		}
	]
}; 

/**
 * Intervals and nodes are both arrays
 * root node will be array of one
 */
function search(intervals) {
	var i,
		j, 
		nodes = [trie],
		match = false,
		chord = null;

	for(i = 0; i < intervals.length; i += 1) {
		console.log(nodes);
		match = false;
		for(j = 0; j < nodes.length; j += 1) {
			if(intervals[i] === nodes[j].value) {
				// found match
				console.log('found match');
				chord = nodes[j].chord;
				nodes = nodes[j].children;
				match = true;
				break;
			}
		}

		// we get to a point in the trie where we have no
		// more matches, we don't have a chord
		if(match === false) {
			console.log('match failed');
			break;
		}
	}

	if(match) {
		return chord;
	}
	else {
		return null;
	}
}

