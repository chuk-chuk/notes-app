(function(exports) {

function NoteController(windowObject, noteElement, formElement, noteList, noteListView, singleNote) {
  this.windowObject = windowObject;
  this.noteElement = noteElement;
  this.formElement = formElement;
	this.noteList = noteList;
	this.noteListView = new noteListView(this.noteList);
  this.singleNote = singleNote;
}

NoteController.prototype = {
  setupHashListener: function(){
    var self = this;
    this.windowObject.addEventListener("hashchange", function() {
      self.processHashChange();
    });
  },
  setupFormListener: function() {
    var self = this;
    this.formElement.addEventListener('submit', function(event) {
      event.preventDefault();
      self.addNote(event.srcElement['0'].value);
    });
  },
  updateDisplay: function(content) {
    this.noteElement.innerHTML = content;
  },
  displayAllNotes: function() {
    this.updateDisplay(this.noteListView.getHTML());
  },
  displayOneNote: function(note) {
    this.updateDisplay(note);
  },
  addNote: function(string) {
    this.noteList.addNote(string);
    this.displayAllNotes();
  },
  processHashChange: function(){
    var id = this.extractIDFromURL();
    if(id) {
      var singleNote = new this.singleNote(this.getNoteByID(id));
      this.displayOneNote(singleNote.returnHTML());
    } else { this.displayAllNotes(); }
  },
  getNoteByID: function(id) {
    return this.noteList.getList()[id];
  },
  extractIDFromURL: function() {
    return this.windowObject.location.hash.split('/')[1];
  }
};
exports.NoteController = NoteController;
})(this);
