(function(exports){
  function singleNote(note){
    this.note = note;
}

singleNote.prototype.returnHTML = function(){

  var string = "<div>";
  string += this.note.getText() + "</div>";
  console.log(string);
  return string;

};

exports.singleNote = singleNote;

})(this);
