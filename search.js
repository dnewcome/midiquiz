/**
 * Given an array of intervals, find
 * matching chord
 */
var trie = {
	value: 0,
	chord: null,
	children: [
		{
			value: 2,
			chord: ' (Interval: Major Second)',
			children: [
				{
					value: 7,
					chord: 'sus2',
					children: []
				}	
			 ]
		},
		{
			value: 3,
			chord: ' (Interval: minor third)',
			children: [
				
				{
					value: 6,
					chord: 'dim',
					children: [
							{
								value: 9,
								chord: 'dim7',
								children: [
									{

										value: 13,
										chord: ' Diminished Minor 9',
										children: [
											{
												value: 16,
												chord: ' Diminished 11',
												children: []
											}
												  ]
									},
									{

										value: 14,
										chord: ' Diminished 9',
										children: []
									}
										  ]
							},
							{
								value: 10,
								chord: 'm7b5',
								children: [
									
										{

										value: 13,
										chord: ' Half Dim Minor 9',
										children: []
									},
									{

										value: 14,
										chord: ' Half Diminished 9',
										children: [
											{
												value: 17,
												chord: ' Half Diminished 11',
												children: [
													{
														value: 21,
														chord: ' half Diminished 13',
														children: []
													}
														  ]
											}
										 ]
									}
								]
							}
					]
				},
				{
					value: 7,
					chord: 'min',
					children: [
						{
							value: 9,
							chord: 'm6 (add 6)',
							children: [
								{
									value: 10,
									chord: 'm7add13',
									children: []
								},
								{
									value: 11,
									chord: 'mMaj7add13',
									children: []
								},
								{
									value: 14,
									chord: 'm6add9',
									children: []
								}
									  ]
						},
						{
							value: 10,
							chord: 'm7',
							children: [
								{
									value: 13,
									chord: 'm7b9',
									children: []
								},
								{
									value: 14,
									chord: 'm9',
									children: [
										{
											value: 17,
											chord: ' m11',
											children: [
												{
													value: 21,
													chord: 'm13',
													children: []
												}
													  ]
										}
											  ]
								},
								{
									value: 17,
									chord: 'm7add11',
									children: []
								}
							]
						},
						{
							value: 11,
							chord: 'm(Maj7)',
							children: [
								{
									value: 14,
									chord: ' minor/Major 9',
									children: [
										{
											value: 17,
											chord: ' minor/Major 11',
											children: [
												{
													value: 21,
													chord: ' minor/Major 13',
													children: []
												}
													  ]
										}
											  ]
								},
								{
									value: 17,
									chord: 'mMaj7add11',
									children: []
								}
							]
						},

						{
							value: 14,
							chord: 'madd9',
							children: []
						},
						{
							value: 17,
							chord: 'madd11',
							children: []
						}
					]
				},
				
					{
					value: 8,
					chord: null,
					children: [
						{
								value: 10,
								chord: 'm7#5',
								children: []
								}
					]
				}
			]
		},
		{
			value: 4,
			chord: '(Interval: Major Third)',
			children: [
				
				{
					value: 6,
					chord: 'add#11',
					children: [
						{
							value: 10,
							chord: '7b5',
							children: []

						}
							  ]
				},
				{
					value: 7,
					chord: 'Maj',
					children: [
						{
							value: 9,
							chord: 'Maj6 (add6)',
							children: [
								{
									value: 10,
									chord: '7add13',
									children: []
								},
								{
									value: 11,
									chord: 'Maj7add13',
									children: []
								},
								{
									value: 14,
									chord: '6add9',
									children: []
								}
									  ]
							  
						},
							
						{
							value: 10,
							chord: '7',
							children: [
								
								{

									value: 13,
									chord: ' Dominant 7b9',
									children: []
								},
								{

									value: 14,
									chord: '9 (Dominant 9)',
									children: [
										{
											value: 17,
											chord: ' Dominant 11',
											children: [
												{
													value: 21,
													chord: ' Dominant 13',
													children: []
												}
												   	  ]
										},
										{
											value: 18,
											chord: ' Dominant 9#11',
											children: []
										},
										{
											value: 20,
											chord: ' Dominant 9b13',
											children: []
										}
											]
								},

								{
									value: 15,
									chord: ' Dominant 7#9',
									children: []
								},
								{
									value: 17,
									chord: '7add11',
									children: []
								}
							]
						},
						{
							value: 11,
							chord: 'Maj7',
							children: [
								{
									value: 14,
									chord: 'Maj9',
									children: [
										{
											value: 17,
											chord: 'Maj11',
											children: [
												{
													value: 21,
													chord: 'Maj13',
													children: []
												}
													  ]
										}	
											  ]
								},
								{
									value: 17,
									chord: 'Maj7add11',
									children: []
								}
								
									  ]

						},
						{
							value: 14,
							chord: 'add9',
							children: []
						},
						{
							value: 17,
							chord: 'add11',
							children: []
						}	
					]
				},
				{
					value: 8,
					chord: 'aug',
					children: [
						{
							value: 10,
							chord: 'aug7(7#5)',
							children: [

								{
									value: 13,
									chord: ' Dominant 7#5b9',
									children: []
								},
								{

									value: 14,
									chord: ' Augmented 9',
									children: [
										{
												value: 17,
												chord: ' Augmented 11',
												children: [
													{
															value: 21,
															chord: ' Augmented 13',
															children: []
													}
														  ]
										}
											  ]
								}
							]

						},	
						{
							value: 11,
							chord: '+M7 (Augmented Major 7))',
							children: [
								{
									value: 14,
									chord: ' Augmented Major 9',
									children: [
										{
												value: 17,
												chord: ' Augmented Major 11',
												children: [
													{
															value: 21,
															chord: ' Augmented Major 13',
															children: []
													}
														  ]
										}
											  ]
								}
							]
						}	
					]
				}
			]
		},
		{
			value: 5,
			chord: ' (Interval: Perfect Fourth)',
			children: [
				{
					value: 7,
					chord: 'sus4',
					children: [
						{
							value: 9,
							chord: '6sus4',
							children: []
						},
						{
							value: 10,
							chord: '7sus4',
							children: [
								{
									value: 13,
									chord: '7sus4b9',
									children: []
								},
								{
									value: 14,
									chord: '9sus4',
									children: []
								}
									  ]
						},
						{
							value: 11,
							chord: 'Maj7sus4',
							children: [
								{
									value: 14,
									chord: 'Maj9sus4',
									children: []
								}
									  ]
						}
							  ]
				}	
					 ]
		},
		{
		value: 6,
			chord: ' (Interval: augmented Fourth / diminished Fifth)',
			children: []
		},
		{
		value: 7,
			chord: ' (Interval: Perfect Fifth)',
			children: []
		},
		{
		value: 8,
			chord: ' (Interval: minor Sixth)',
			children: []
		},
		{
		value: 9,
			chord: ' (Interval: Major Sixth)',
			children: []
		},
		{
		value: 10,
			chord: ' (Interval: minor Seventh)',
			children: []
		},
		{
		value: 11,
			chord: ' (Interval: Major Seventh)',
			children: []
		},
		{
		value: 12,
			chord: ' (Interval: Octave)',
			children: []
		}
	]

}; 

function invert(intervals) {
	intervals[0] = intervals[0] + 12;
	intervals = intervals.map(function(i){return i-intervals[1]});
	intervals.sort();
	return intervals;
}

function searchInversions(intervals) {
	var i;
	var chord = search(intervals);	
	if(chord) {
		return chord;
	}
	for(i = 1; i < intervals.length; i += 1) {
		intervals = invert(intervals);	
		chord = search(intervals);	
		if(chord) {
			return chord + ' inversion ' + i;
		}
	}
	return chord;
}

/**
 * Intervals and nodes are both arrays
 * root node will be array of one
 */
function search(intervals) {
	console.log('intervals');
	console.log(intervals);
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

