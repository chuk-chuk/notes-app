describe("note controller", function(){

  var elementMock = {};

  var noteModelMock = {
    id: 0
  };

  var noteListMock = {
    addNote: function(){},
    getList: function(){
      return [noteModelMock];
    }
  };


  function WindowMock(){ this.listenerCallCount = 0;}

  WindowMock.prototype.addEventListener = function(toListen, fn){
    this.listenerCallCount++;
    this.listeningFor = toListen;
  };

  WindowMock.prototype.location = {
    hash: "notes/0"
  };

  var HTMLString = "<ul><li><div>Something new today</div></li></ul>";
  var singleHTMLString = "<div>Something new today</div>";

  function NoteListViewMock(){}
  NoteListViewMock.prototype.getHTML = function(){
    return HTMLString;
  };

  function SingleNoteMock(){}
  SingleNoteMock.prototype.returnHTML = function(){
    return singleHTMLString;
  };
  var windowMock = new WindowMock();
  var noteController = new NoteController(windowMock, elementMock, noteListMock, NoteListViewMock, SingleNoteMock);

  it("updates inner HTML property of the element", function(){
    noteController.updateDisplay();
    assert.isTrue(elementMock.innerHTML === HTMLString);
  });

  noteController.setupHashListener();

  it("calls add event listener function", function(){
    assert.isTrue(windowMock.listenerCallCount === 1);
  });

  it("sets up window to listen for hashchange", function(){
    assert.isTrue(windowMock.listeningFor === "hashchange");
  });

  it("updates HTML property with a single note", function(){
    noteController.updateURL();
    assert.isTrue(elementMock.innerHTML === singleHTMLString);
  });
});
