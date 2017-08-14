function testGetList() {
  var noteList = new NoteList;
  assert.isTrue(noteList.getList.length === 0);

}
function testAddNote() {
  var noteList = new NoteList;
  var note = new Note("Hello");
  noteList.addNote(note);
  assert.isTrue(noteList.getList.length === 1);
}

testGetList();
