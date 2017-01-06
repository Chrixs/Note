(function singleNoteViewCanExist() {
  var singleNoteView = new SingleNoteView()
  assert.isTrue(singleNoteView)
})();

(function singleNoteViewTakesNote() {
  function doubleNote() {};
  var doubleNote = new doubleNote()
  var singleNoteView = new SingleNoteView(doubleNote)
  assert.isTrue(singleNoteView.note === doubleNote)
})();

(function singleNoteViewReturnsHtmlString() {
  function doubleNote(text) {
    this._text = text
  };
  var doubleNote = new doubleNote("Favourite drink: seltzer")
  var singleNoteView = new SingleNoteView(doubleNote)
  assert.isTrue(singleNoteView.returnHtml() === "<div>Favourite drink: seltzer</div>")
})();
