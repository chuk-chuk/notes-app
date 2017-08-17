(function(exports) {

function NoteController(windowObject, noteElement, formElement, noteList, noteListView, singleNote) {
  this.windowObject = windowObject;
  this.noteElement = noteElement;
  this.formElement = formElement;
	this.noteList = noteList;
	this.noteListView = new noteListView(this.noteList);
  this.singleNote = singleNote;
}

NoteController.prototype.updateDisplay = function() {
  this.noteElement.innerHTML = this.noteListView.getHTML();
};

NoteController.prototype.addNote = function(string) {
  this.noteList.addNote(string);
  this.updateDisplay();
};

NoteController.prototype.setupHashListener = function(){
  var self = this;
  this.windowObject.addEventListener("hashchange", function() {
    self.updateURL();
  });
};

NoteController.prototype.setupFormListener = function() {
  var self = this;
  this.formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    self.addNote(event.srcElement['0'].value);
  });
};

NoteController.prototype.updateURL = function(){
  var id = this.windowObject.location.hash.split('/')[1];
  var singleNote = new this.singleNote(this.noteList.getList()[id]);
  this.noteElement.innerHTML = singleNote.returnHTML();
};

exports.NoteController = NoteController;
})(this);
