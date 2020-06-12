function modal(data) {
  var self = this;
  self.title = data.title || 'Default title';
  self.message = data.message || 'Default message';
  self.confirmButtonText = data.confirmButtonText || 'Default text';
  self.confirmAction = data.confirmAction || function() { alert("Default action"); };
}

$(document).ready(function () {
  $("#editText").on("click", function(e) {
    e.preventDefault();
    const data = {
      title: 'Location Search Text',
      message: 'Enter description',
      confirmButtonText: 'Save',
      element: $("#source")
    };
    
  })
});