(function(exports) {

function NoteController(NoteList){
  NoteList.addNote('Something new');
  this.listview = new ListView(NoteList);
  console.log(this.listview);
}

NoteController.prototype.changeString = function() {
  document.getElementById('app').innerHTML = this.listview.show();
};

exports.NoteController = NoteController;
})(this);

// document.getElementById('app').innerHTML = 'Howdy';
notelist = new NoteList(Note);
notecontroller = new NoteController(notelist);
notecontroller.changeString();
