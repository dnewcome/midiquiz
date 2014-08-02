QUnit.test( 'major chord search', function( assert ) {
	var chord = search([0, 4, 7]);	
	assert.equal(chord, 'maj', 'failed' );
});

QUnit.test( 'minor chord search', function( assert ) {
	var chord = search([0, 3, 7]);	
	assert.equal(chord, 'min', 'failed' );
});

QUnit.test( 'augmented chord search', function( assert ) {
	var chord = search([0, 4, 8]);	
	assert.equal(chord, 'aug', 'failed' );
});

QUnit.test( 'diminished chord search', function( assert ) {
	var chord = search([0, 3, 6]);	
	assert.equal(chord, 'dim', 'failed' );
});

QUnit.test( 'no chord found', function( assert ) {
	var chord = search([0, 2, 7]);	
	assert.equal(chord, null, 'failed' );
});

QUnit.test( 'no chord found', function( assert ) {
	var chord = search([0, 3, 4]);	
	assert.equal(chord, null, 'failed' );
});

QUnit.test( 'no chord found', function( assert ) {
	var chord = search([0, 3, 7, 8]);	
	assert.equal(chord, null, 'failed' );
});

QUnit.test( 'no chord found', function( assert ) {
	var chord = search([0, 3, 7, 8, 9]);	
	assert.equal(chord, null, 'failed' );
});

/*
1.	User select 1/12 harmonic scales 
C major / A minor
C#(Db) major / A#(Bb) minor
D major / B minor
D# (Eb) major / B# (C) minor
E major / C#(Db) minor
F major / D minor
F#(Gb) major /  D#(Eb) minor
G major / E Minor
Ab (G#)  major / F minor
A major / F#(Gb)  minor
Bb (A#) major / G minor
B major  / G#(Ab) minor
2.	Pick Midi test (i.e. Basic, Advanced, Master, Custom)

3.	Pick number of Quiz Questions
choose 25,50,75,100

4.	Generate Test
5.	Display harmonic degree (
	I
•	IIm
•	III7
•	IV
•	V
•	VIm
•	VII°
*/
