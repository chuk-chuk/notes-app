function noteListView() {
  var noteList = new NoteList(Note);
  noteList.addNote("Something new today");
  var listView = new ListView(noteList);
  assert.isTrue(listView.show() === "<ul><li><div>Something </div></li></ul>");
}

noteListView();
