describe("note controller", function(){

  var elementMock = {};
  var noteListMock = {
    addNote: function(){},
    getList: function(){
      return [noteModelMock];
    }
  };

  var HTMLString = "<ul><li><div>Something new today</div></li></ul>";
  
  function NoteListViewMock(){}
  NoteListViewMock.prototype.getHTML = function(){
    return HTMLString;
  };

  var noteController = new NoteController(elementMock, noteListMock, NoteListViewMock);

  it("updates inner HTML property of the element", function(){
    noteController.updateDisplay();
    assert.isTrue(elementMock.innerHTML === HTMLString);
  });
});
