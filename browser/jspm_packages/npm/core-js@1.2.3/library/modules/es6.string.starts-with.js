/* */ 
'use strict';
var $def = require('./$.def'),
    toLength = require('./$.to-length'),
    context = require('./$.string-context'),
    STARTS_WITH = 'startsWith',
    $startsWith = ''[STARTS_WITH];
$def($def.P + $def.F * require('./$.fails-is-regexp')(STARTS_WITH), 'String', {startsWith: function startsWith(searchString) {
    var that = context(this, searchString, STARTS_WITH),
        $$ = arguments,
        index = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length)),
        search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }});
