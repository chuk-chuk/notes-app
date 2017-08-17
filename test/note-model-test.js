describe("noteModel", function(){
  var note_0 = new Note("My favourite language is JavaScript");
  var note_1 = new Note("I like ham sandwiches");
  var note_2 = new Note("This is the best notes app ever");

  it("created with some text", function(){
    assert.isTrue(note_0.getText() === "My favourite language is JavaScript");
  });

  it("is created with a unique ID (FIRST NOTE)", function() {
    assert.isTrue(note_0.id === 0);
  });
  it("is created with a unique ID (SECOND NOTE)", function() {
    assert.isTrue(note_1.id === 1);
  });
  it("is created with a unique ID (THIRD NOTE)", function() {
    assert.isTrue(note_2.id === 2);
  });
});
