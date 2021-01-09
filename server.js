const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const flash = require('connect-flash');
var MidiWriter = require('midi-writer-js');


var jsonParser = bodyParser.json({ extended: false })

// routes ================================
require('./app/routes.js')(app);

app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.post('/api/midi', jsonParser, midi_func);
app.use(express.static('mid_files'));
function midi_func(req, res){
	// console.log(req.body.notes);

	// Start with a new track
	var track = new MidiWriter.Track();

	// Define an instrument (optional):
	track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}));

	// Add some notes:
	track.setTempo(req.body.tempo);

	var note = new MidiWriter.NoteEvent({pitch: req.body.notes, duration: '4'});
	track.addEvent([note], function(event, index) {return {sequential: true};} );

	console.log(req.body.tempo);
	// Generate a data URI
	var write = new MidiWriter.Writer(track);
	var file_uri =  write.dataUri();
	let r = Math.random().toString(36).substring(7);
	write.saveMIDI("mid_files/"+r);

	var options = { 
        root: path.join(__dirname) 
    };
    res.json({file_name: r + '.mid'});
};

app.listen(process.env.PORT || 5000);
console.log("Server running at localhost:5000");
