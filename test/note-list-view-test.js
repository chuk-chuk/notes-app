describe("noteListView", function(){
  var noteListMock = {
    addNote: function(){},
    getList: function(){
      return [noteModelMock];
    }
  };

  var noteModelMock = {
    getText: function(){
      return "Something new today";
    }
  };

  var listView = new ListView(noteListMock);

  it("it created with a notelist", function(){
    assert.isTrue(listView.list === noteListMock);
  });

  it("converts notes into HTML string", function(){
    noteListMock.addNote("Something new today");
    assert.isTrue(listView.getHTML() === "<ul><li><div>Something new today</div></li></ul>");
  });

  it("returns a max of 20chars of HTML string", function(){
    noteModelMock.getText = function(){
      return "I like JavaScript, but it is not as nice as Ruby";
    };
    assert.isTrue(listView.getHTML() === "<ul><li><div>I like JavaScript, b</div></li></ul>");
  });

});
