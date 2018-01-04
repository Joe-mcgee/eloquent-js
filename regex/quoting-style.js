var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^'|'\s|\s'|'$)/g, function myFunction(x) {
  if (x.match(/'\s/)) {
    return '" '
  } else if (x.match(/\s'/)) {
    return ' "'
  } else {
    return '"'
  }
}));
// → "I'm the cook," he said, "it's my job."s