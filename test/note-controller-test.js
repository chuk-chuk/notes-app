describe("note controller", function(){

  var noteElementMock = {};
  // var formElementMock = {};
  var noteModelMock = {
    id: 0
  };

  function FormElementMock(){ this.listenerCallCount = 0;}

  FormElementMock.prototype.addEventListener = function(toListen, fn){
    this.listenerCallCount++;
    this.listeningFor = toListen;
  };

  function NoteListMock(){
    this.addNoteCallCount = 0;
  }
  NoteListMock.prototype.addNote = function(string){
    this.argument = string;
    this.addNoteCallCount++;
  };

  NoteListMock.prototype.getList = function(){
    return [noteModelMock];
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

  function NoteListViewMock(){
    this.getHTMLCallCount = 0;
  }

  NoteListViewMock.prototype.getHTML = function(){
    this.getHTMLCallCount++;
    return HTMLString;
  };

  function SingleNoteMock(){}
  SingleNoteMock.prototype.returnHTML = function(){
    return singleHTMLString;
  };
  var windowMock = new WindowMock();
  var formElementMock = new FormElementMock();
  var noteListMock = new NoteListMock();
  var noteController = new NoteController(windowMock, noteElementMock, formElementMock, noteListMock, NoteListViewMock, SingleNoteMock);


  it("initialized with no notes", function(){
    assert.isTrue(noteListMock.addNoteCallCount === 0 );
  });

  it("updates inner HTML property of the element", function(){
    noteController.updateDisplay();
    assert.isTrue(noteElementMock.innerHTML === HTMLString);
  });

  noteController.setupHashListener();

  it("calls add event listener function", function(){
    assert.isTrue(windowMock.listenerCallCount === 1);
  });

  it("sets up window to listen for hashchange", function(){
    assert.isTrue(windowMock.listeningFor === "hashchange");
  });

  noteController.setupFormListener();

  it("add event listener to the form", function(){
    assert.isTrue(formElementMock.listenerCallCount === 1);
  });

  it("sets up form to listen for submit", function(){
    assert.isTrue(formElementMock.listeningFor === "submit");
  });

  it("updates HTML property with a single note", function(){
    noteController.updateURL();
    assert.isTrue(noteElementMock.innerHTML === singleHTMLString);
  });

  noteController.noteListView.getHTMLCallCount = 0;
  noteController.addNote("test");

  it("ask notelist to create new note", function(){
    assert.isTrue(noteListMock.addNoteCallCount === 1);
  });

  it("notelist receives form data input when submitted", function(){
    assert.isTrue(noteListMock.argument === "test");
  });

  it("asks notelist view to update the display", function(){
    assert.isTrue(noteController.noteListView.getHTMLCallCount === 1);
  });

});
