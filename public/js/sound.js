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


// starts the timeline and defines bpm
Tone.Transport.start();
Tone.Transport.bpm.value = 120;


// note1
document.querySelector("#btn1").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("A3", "8n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "A3");
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
  synth1.triggerAttackRelease("A#3", "8n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "A#3");
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
  synth1.triggerAttackRelease("B3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "B3");
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
  synth1.triggerAttackRelease("C3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "C3");
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
  synth1.triggerAttackRelease("C#3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "C#3");
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

// note6
document.querySelector("#btn6").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("D3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "D3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2m";
// to stop the note
document.querySelector("#offbtn6").addEventListener("click", function(){
note.stop();
});
});

// note7
document.querySelector("#btn7").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("D#3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "D#3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1n";
// to stop the note
document.querySelector("#offbtn7").addEventListener("click", function(){
note.stop();
});
});

// note8
document.querySelector("#btn8").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("E3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "E3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "0.5m";
// to stop the note
document.querySelector("#offbtn8").addEventListener("click", function(){
note.stop();
});
});

// note9
document.querySelector("#btn9").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("F3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "F3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2m";
// to stop the note
document.querySelector("#offbtn9").addEventListener("click", function(){
note.stop();
});
});

// note10
document.querySelector("#btn10").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("F#3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "F#3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1m";
// to stop the note
document.querySelector("#offbtn10").addEventListener("click", function(){
note.stop();
});
});

// note11
document.querySelector("#btn11").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("G3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "G3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1n";
// to stop the note
document.querySelector("#offbtn11").addEventListener("click", function(){
note.stop();
});
});

// note12
document.querySelector("#btn12").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("G#3", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "G#3");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2n";
// to stop the note
document.querySelector("#offbtn12").addEventListener("click", function(){
note.stop();
});
});

// note13
document.querySelector("#btn13").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("A4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "A4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "0.9m";
// to stop the note
document.querySelector("#offbtn13").addEventListener("click", function(){
note.stop();
});
});

// note14
document.querySelector("#btn14").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("A#4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "A#4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1m";
// to stop the note
document.querySelector("#offbtn14").addEventListener("click", function(){
note.stop();
});
});

// note15
document.querySelector("#btn15").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("B4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "B4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2m";
// to stop the note
document.querySelector("#offbtn15").addEventListener("click", function(){
note.stop();
});
});

// note16
document.querySelector("#btn16").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("C4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "C4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "0.9m";
// to stop the note
document.querySelector("#offbtn16").addEventListener("click", function(){
note.stop();
});
});

// note17
document.querySelector("#btn17").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("C#4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "C#4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "0.6n";
// to stop the note
document.querySelector("#offbtn17").addEventListener("click", function(){
note.stop();
});
});

// note18
document.querySelector("#btn18").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("D4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "D4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "0.9n";
// to stop the note
document.querySelector("#offbtn18").addEventListener("click", function(){
note.stop();
});
});

// note19
document.querySelector("#btn19").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("D#4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "D#4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2n";
// to stop the note
document.querySelector("#offbtn19").addEventListener("click", function(){
note.stop();
});
});

// note20
document.querySelector("#btn20").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("E4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "E4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1m";
// to stop the note
document.querySelector("#offbtn20").addEventListener("click", function(){
note.stop();
});
});

// note21
document.querySelector("#btn21").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("F4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "F4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1.5m";
// to stop the note
document.querySelector("#offbtn21").addEventListener("click", function(){
note.stop();
});
});

// note22
document.querySelector("#btn22").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("F#4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "F#4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "2.4m";
// to stop the note
document.querySelector("#offbtn22").addEventListener("click", function(){
note.stop();
});
});

// note23
document.querySelector("#btn23").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("G4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "G4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1.9m";
// to stop the note
document.querySelector("#offbtn23").addEventListener("click", function(){
note.stop();
});
});

// note24
document.querySelector("#btn24").addEventListener("click", function(){

var note = new Tone.Event(function(time, chord){
  synth1.triggerAttackRelease("G#4", "16n", time);
	//the chord as well as the exact time of the event
	//are passed in as arguments to the callback function
}, "G#4");
//start the chord at the beginning of the transport timeline
note.start();
//loop it every measure for 8 measures
note.loop = 100;
note.loopEnd = "1n";
// to stop the note
document.querySelector("#offbtn24").addEventListener("click", function(){
note.stop();
});
});


// defining the VOLUME
var vol = new Tone.Volume(-10);


// handling the outputs
synth1.chain(vol, Tone.Master);
synth2.chain(vol, Tone.Master);
synth3.chain(vol, Tone.Master);
synth4.chain(vol, Tone.Master);
synth5.chain(vol, Tone.Master);
