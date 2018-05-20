function justInvoke(funct) {
  return funct();
}

function setThisWithCall(funct, thisValue, arg) {
  return funct.call(thisValue, arg);
}

function setThisWithApply(funct, thisValue, args) {
  return funct.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
