function testNoteController(){
  var noteController = new NoteController();
  var noteList = new NoteList(Note);
  NoteList.addNote('Something new');
  var string = "<ul><li><div>Something else</div></li></ul>";
  assert.isTrue(noteController.changeString() === string);
}
testNoteController();

//   function NoteListDouble(){}
//
//   NoteListDouble.prototype = {
//     addNote: function() {}
//   };
//   var listview = new ListView();//to mock
//   listview.show = function() {
//     return document.getElementById('app').innerHTML;
//   };
//   var noteListDouble = new noteListDouble();
//   var NoteController = new NoteController()
//   assert.isTrue(test === "<ul><li><div>Something else</div></li></ul>");
// }
// var test = document.getElementById('app')
//
// NoteController.changeString()
//
// var test = document.getElementById('app')

// var dummyElement = document.createElement('div');
// document.getElementById = jasmine.createSpy('HTML Element').andReturn(dummyElement);

// function testGetList() {
//   var noteList = new NoteList();
//   assert.isTrue(noteList.getList().length === 0);
//
// }
// function testAddNote() {
//   var noteList = new NoteList(Note);
//   noteList.addNote("hello");
//   assert.isTrue(noteList.getList().length === 1);
// }
//
// testGetList();
// testAddNote();
