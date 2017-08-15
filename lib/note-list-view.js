(function(exports) {
  function ListView(noteList){
    this.list = noteList;
    console.log(this.list);
    var note = new Note();
  }

ListView.prototype.show = function(){
  var string = "<ul>";
  this.list.getList().forEach(function(note){
    string += "<li><div>" + note.getText() + "</div></li>";
  });
  string += "</ul>";
  console.log(string);
  return string;
};
  exports.ListView = ListView;
})(this);

//string.join('</div></li><li><div>')
