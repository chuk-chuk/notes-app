(function(){
  var element = document.getElementById('app');
  var notelist = new NoteList(Note);
  var notecontroller = new NoteController(element, notelist, ListView);
  notecontroller.updateDisplay();
  notecontroller.setupHashListener();
})();
