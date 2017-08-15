(function(exports) {


function changeString(id, newValue) {
  var elem = document.getElementById(id);
  elem.innerHTML = newValue;
}
exports.changeString = changeString;
})(this);

window.onload = function() {
  changeString('app', "HI");
};
