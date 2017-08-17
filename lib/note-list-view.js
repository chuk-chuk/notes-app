(function(exports) {
  function ListView(noteList){
    this.list = noteList;
    var note = new Note();
  }

ListView.prototype.getHTML = function(){
  var string = "<ul>";
  this.list.getList().forEach(function(note){
    string += "<li><div>" + note.getText().substring(0, 20) + "</div></li>";
  });
  string += "</ul>";
  return string;
};
  exports.ListView = ListView;
})(this);
