(function(exports) {
  function NoteList() {
    this.notes = [];

  }
NoteList.prototype.getList = function(){
 return this.notes;
};

NoteList.prototype.addNote = function(text) {
  this.notes.push(new Note(text));
};
  exports.NoteList = NoteList;
})(this);
