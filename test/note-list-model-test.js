describe ("noteListModel", function(){
  function noteModelMock(){}
  var noteList = new NoteList(noteModelMock);
  it("it begins with an empty notelist", function(){
      assert.isTrue(noteList.getList().length === 0);
  });

  it("can store notes", function(){
    noteList.addNote("hello");
    assert.isTrue(noteList.getList().length === 1);
  });
});
