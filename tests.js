QUnit.test( 'major chord search', function( assert ) {
	var chord = search([0, 4, 7]);	
	assert.equal(chord, 'maj', 'failed' );
});

QUnit.test( 'minor chord search', function( assert ) {
	var chord = search([0, 3, 7]);	
	assert.equal(chord, 'min', 'failed' );
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
