var sampler = new Tone.Sampler({
	"a" : "../sounds/a.mp3",
}, function(){
	//sampler will repitch the closest sample
	sampler.triggerAttack("a", "8n");
});


function makeSampler() {
  return new Tone.Sampler({
    "a" : "../sounds/a.mp3",
  }, function(){
    //sampler will repitch the closest sample
    sampler.triggerAttack("a", "8n");
  });
}

// function to create the synth
function makeSynth() {

return new Tone.DuoSynth({
  harmonicity: 4,
  volume: -20,
  voice1: {
    oscillator: {type: 'sine'},
    envelope: {
      attack: 0.0,
      release: 0,
      releaseCurve: 'linear'
    },
    filterEnvelope: {
      baseFrequency: 900,
      octaves: 1,
      attack: 0,
      decay: 0,
      release: 1000
    }
  },
  voice2: {
    oscillator: {type: 'sine'},
    envelope: {
      attack: 0,
      release: 0,
      releaseCurve: 'linear'
    },
    filterEnvelope: {
      baseFrequency: 800,
      octaves: 3,
      attack: 0,
      decay: 0,
      release: 1000
    }
  },
  vibratoRate: 0.3,
  vibratoAmount: 0.05
});

}

// creates new iteration of synth
let synth1 = makeSynth();
let synth2 = makeSynth();
let synth3 = makeSynth();
let synth4 = makeSynth();
let synth5 = makeSynth();
let sample1 = makeSampler();


// starts the timeline and defines bpm
Tone.Transport.start();
Tone.Transport.bpm.value = 120;

// note 1
// document.querySelector("#btn1").addEventListener("click", function(){
//
// var note = new Tone.Event(function(time, pitch) {
//   synth1.triggerAttackRelease(pitch, "8n", time);
// }, "D5");
//
// // set the note to loop every half measure
// note.set({
//   "loop": true,
//   "loopEnd": "1m"
// });
//
// note.start(0);
//
// });

// note1
document.querySelector("#btn1").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("A4", "8n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "A4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1.7m";
// to stop the note
document.querySelector("#offbtn1").addEventListener("click", function(){
note.stop();
});
});



// note2
document.querySelector("#btn2").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("D5", "8n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "D5");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1.5m";
// to stop the note
document.querySelector("#offbtn2").addEventListener("click", function(){
note.stop();
});
});

// note3
document.querySelector("#btn3").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("C5", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "C5");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2n";
// to stop the note
document.querySelector("#offbtn3").addEventListener("click", function(){
note.stop();
});
});


// note4
document.querySelector("#btn4").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("F5", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "F5");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1m";
// to stop the note
document.querySelector("#offbtn4").addEventListener("click", function(){
note.stop();
});
});


// note5
document.querySelector("#btn5").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("G4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "G4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "0.9m";
// to stop the note
document.querySelector("#offbtn5").addEventListener("click", function(){
note.stop();
});
});


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value
//
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// };


// defining the VOLUME
var vol = new Tone.Volume(-10);


// handling the outputs
synth1.chain(vol, Tone.Master);
synth2.chain(vol, Tone.Master);
synth3.chain(vol, Tone.Master);
synth4.chain(vol, Tone.Master);
synth5.chain(vol, Tone.Master);
