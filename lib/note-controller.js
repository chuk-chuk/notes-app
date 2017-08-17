(function(exports) {

function NoteController(windowObject, element, noteList, noteListView, singleNote) {
  this.windowObject = windowObject;
  this.element = element;
	this.noteList = noteList;
	this.noteList.addNote("Favourite drink");
	this.noteListView = new noteListView(this.noteList);
  this.singleNote = singleNote;
}

NoteController.prototype.updateDisplay = function() {
  this.element.innerHTML = this.noteListView.getHTML();
};

NoteController.prototype.setupHashListener = function(){
  var self = this;
  this.windowObject.addEventListener("hashchange", function() {
    self.updateURL();
  });
};

NoteController.prototype.setupFormListener = function() {
  var formElement = document.getElementById('text')
  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
  });
};

NoteController.prototype.updateURL = function(){
  var id = this.windowObject.location.hash.split('/')[1];
  var singleNote = new this.singleNote(this.noteList.getList()[id]);
  this.element.innerHTML = singleNote.returnHTML();
};

exports.NoteController = NoteController;
})(this);
