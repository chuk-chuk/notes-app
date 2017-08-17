(function(){
  var element = document.getElementById('app');
  var notelist = new NoteList(Note);
  var notecontroller = new NoteController(window, element, notelist, ListView, SingleNote);
  notecontroller.setupHashListener();
  notecontroller.setupFormListener();
  notecontroller.updateDisplay();
})();
