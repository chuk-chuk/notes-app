(function(exports) {
  function NoteList(noteConstructor) {
    this.notes = [];
    this.constructor = noteConstructor;
  }
NoteList.prototype.getList = function(){
 return this.notes;
};

NoteList.prototype.addNote = function(text) {
  var note = this.constructor;
  this.notes.push(new note(text));
};
  exports.NoteList = NoteList;
})(this);
