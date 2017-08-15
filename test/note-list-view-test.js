function noteListView() {
  var noteList = new NoteList(Note);
  noteList.addNote("Hello");
  var listView = new ListView(noteList);
  assert.isTrue(listView.show() === "<ul><li><div>Hello</div></li></ul>");
}

noteListView();
