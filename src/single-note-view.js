(function(exports) {

  function SingleNoteView(note) {
    this.note = note
  };

  SingleNoteView.prototype.returnHtml = function() {
    return "<div>" + this.note._text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
