describe("single note view", function(){

  var noteModelMock = {
    getText: function(){
      return "Something new today";
    }
  };

  var singlenote = new SingleNote(noteModelMock);

  it("renders HTML for a single note", function(){
    assert.isTrue(singlenote.returnHTML() === "<div>Something new today</div>");
  });
});
