function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  var url = ScriptApp.getService().getUrl();
  template.url = url;
  var output = template.evaluate();
  return output;
}

function getPhotoUrl() {
  const folder = DriveApp.getRootFolder();
  const owner = folder.getOwner();
  const url = owner.getPhotoUrl();
  return url;
}
