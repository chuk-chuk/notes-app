(function(exports){
  function SingleNote(note){
    this.note = note;
}

SingleNote.prototype.returnHTML = function(){

  var string = "<div>";
  string += this.note.getText() + "</div>";
  return string;

};

exports.SingleNote = SingleNote;

})(this);
