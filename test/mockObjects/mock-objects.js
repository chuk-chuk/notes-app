(function(exports) {

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
  NoteListMock.prototype.getList = function(){};

  function WindowMock(){ this.listenerCallCount = 0;}

  WindowMock.prototype.addEventListener = function(toListen, fn){
    this.listenerCallCount++;
    this.listeningFor = toListen;
  };

  WindowMock.prototype.location = {
    hash: "notes/0"
  };

  exports.NoteListMock = NoteListMock;
  exports.FormElementMock = FormElementMock;
  exports.WindowMock = WindowMock;
})(this);
