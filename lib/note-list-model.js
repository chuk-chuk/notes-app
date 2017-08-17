(function(exports) {
  function NoteList(noteModel) {
    this.noteModel = noteModel;
    this.notes = [];
  }

NoteList.prototype.getList = function(){
 return this.notes;
};

NoteList.prototype.addNote = function(text) {
  var note = new this.noteModel(text);
  this.notes.push(note);
};
  exports.NoteList = NoteList;
})(this);
