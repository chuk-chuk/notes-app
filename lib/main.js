(function(){
  var noteElement = document.getElementById('app');
  var formElement = document.getElementById('text')
  var notelist = new NoteList(Note);
  var notecontroller = new NoteController(window, noteElement, formElement, notelist, ListView, SingleNote);
  notecontroller.setupHashListener();
  notecontroller.setupFormListener();
  notecontroller.updateDisplay();
})();
