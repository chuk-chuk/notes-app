function noteListView() {
  var noteList = new NoteList();
  var note = new Note("Hello");
  noteList.addNote(note);
  var listView = new ListView(noteList);
  assert.isTrue(listView.show() === "<ul><li><div>Hello</div></li></ul>");
}

noteListView();
