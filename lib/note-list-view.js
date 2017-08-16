(function(exports) {
  function ListView(noteList){
    this.list = noteList;
    var note = new Note();
  }

ListView.prototype.show = function(){
  var string = "<ul>";
  this.list.getList().forEach(function(note){
    string += "<li><div>" + note.getText() + "</div></li>";
  });
  string += "</ul>";
  return string;
};
  exports.ListView = ListView;
})(this);
