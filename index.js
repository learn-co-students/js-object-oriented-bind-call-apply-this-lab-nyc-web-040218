function justInvoke(fn) {
    return fn()
}

function setThisWithCall(fn, thisVal, arg){
    return fn.call(thisVal, arg)
}

function setThisWithApply(fn, thisVal, arg){
    return fn.apply(thisVal, arg)
}

function returnNewFunctionOf(fn, thisVal){
    return fn.bind(thisVal)
}