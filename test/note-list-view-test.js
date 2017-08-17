describe("noteListView", function(){
  var noteListMock = {
    addNote: function(){},
    getList: function(){
      return [noteModelMock];
    }
  };

  var noteModelMock = {
    id: 0,
    getText: function(){
      return "Something new today";
    }
  };

  var secondNoteModelMock = {
    id: 1,
    getText: function(){
      return "Something new today again";
    }
  };

  var listView = new ListView(noteListMock);
  var firstNote = "<li><a href='#notes/0'>Something new today</a></li>";
  var newFirstNote = "<li><a href='#notes/0'>I like JavaScript, b</a></li>";
  var secondNote = "<li><a href='#notes/1'>Something new today </a></li>";

  it("it created with a notelist", function(){
    assert.isTrue(listView.list === noteListMock);
  });

  it("converts notes into HTML string", function(){
    noteListMock.addNote("Something new today");
    assert.isTrue(listView.getHTML() === "<ul>" + firstNote + "</ul>");
  });

  it("returns a max of 20chars of HTML string", function(){
    noteModelMock.getText = function(){
      return "I like JavaScript, but it is not as nice as Ruby";
    };
    assert.isTrue(listView.getHTML() === "<ul>"+ newFirstNote + "</ul>");
  });

  it("adds URL link to all notes", function(){
    noteListMock.addNote("Something new today");
    noteListMock.getList = function(){
      return [noteModelMock, secondNoteModelMock];
    };

    assert.isTrue(listView.getHTML() === "<ul>" + newFirstNote + secondNote + "</ul>");
  });
});
