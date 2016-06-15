exports.isFunction = func => !!(func && func.constructor && func.call && func.apply)
