var BrainSensor = require('bindings')('BrainSensor');

BrainSensor.connect(function(event) {
	console.log("errrmaggahhd! A callback with an event!", event);
});


// obj.connect('/Users/cgerard/Library/Application Support/Emotiv/Profiles/charlie.emu', _.throttle(function(e){
	// obj.connect('', function(e){
	// obj.rezero();
	// console.log(e);
	// if (e.smile) console.log('Smile: ', e.smile);

	// console.log('this is working and is connected');
	// console.log('gyro', e.gyroX+':'+ e.gyroY);
// }, 1000));

