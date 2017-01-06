function controllerExists() {
  var noteController = new NoteController()
  assert.isTrue(noteController);
};

function NoteControllerChangesAppProperty() {
  var notecontroller = new NoteController();
  notecontroller.noteListView.noteList.createNote('Hello there');
  notecontroller.changeText()
  var element = document.getElementById('app');
  assert.isTrue(element.innerHTML === '<ul><li><div>Hello there</div></li></ul>');
};

controllerExists();
NoteControllerChangesAppProperty();
