function singleNoteViewTest() {
  var note = new Note("Hello");
  var singlenote = new singleNote(note);
  console.log(note);
  assert.isTrue(singlenote.returnHTML() === "<div>Hello</div>");
}
singleNoteViewTest();
