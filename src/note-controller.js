(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeText = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.htmlString();
  };



  exports.NoteController = NoteController ;
})(this);
