(function(exports) {
  function ListView(noteList){
    this.list = noteList;
  }

ListView.prototype.getHTML = function(){
  var string = "<ul>";
  this.list.getList().forEach(function(note){
    string += "<li><a href='#notes/" + note.id + "'>" + note.getText().substring(0, 20) + "</a></li>";
  });
  string += "</ul>";
  return string;
};
  exports.ListView = ListView;
})(this);
