(function(exports) {
  var id = 0;
  function Note(text) {
    this.id = id;
    this.text = text;
    id++;
  }
  Note.prototype.getText = function(){
   return this.text;
  };
  exports.Note = Note;
})(this);
