// Saves options to chrome.storage
function save_options() {
  var app_url = document.getElementById('app_url').value;
  var my_url = document.getElementById('my_url').value;
  var identifier = document.getElementById('identifier').value;
  chrome.storage.sync.set({
    app_url: app_url,
    my_url: my_url,
    identifier: identifier
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    app_url: "https://dev.example.com",
    my_url: "http://www.example.com",
    identifier: "*://dev.example.com/*/article/*"
  }, function(items) {
    document.getElementById('app_url').value = items.app_url;
    document.getElementById('my_url').value = items.my_url;
    document.getElementById('identifier').value = items.identifier;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);