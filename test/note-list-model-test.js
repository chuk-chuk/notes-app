function testGetList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getList().length === 0);

}
function testAddNote() {
  var noteList = new NoteList(Note);
  noteList.addNote("hello");
  assert.isTrue(noteList.getList().length === 1);
}

testGetList();
testAddNote();
