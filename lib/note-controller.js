(function(exports) {

function NoteController(element, noteList, noteListView){
  this.element = element;
	this.noteList = noteList;
	this.noteList.addNote("Favourite drink");
	this.noteListView = new noteListView(this.noteList)
}

NoteController.prototype.updateDisplay = function() {
  // document.getElementById(element).innerHTML = this.listview.show();
  this.element.innerHTML = this.noteListView.getHTML();
};

exports.NoteController = NoteController;
})(this);

//
// notelist = new NoteList(Note);
// notecontroller = new NoteController(notelist);
// notecontroller.updateDisplay();
