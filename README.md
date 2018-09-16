This a super-simple package. Sorry, there's no index.js file, but you really don't need it.
To use any one of the functions in your files, just include its import statement (commented on the
right of each function).
All the files in this package are clearly named for what functions they contain.
Everything is in TypeScript, with transpiled JavaScript files included.

Contains these functions:


// Functions that trigger fatal error if variable is not required type:
// They all return void:

checkTypeOf(variable, expectedType) // import {checkTypeOf} from 'basic-data-handling/checkTypeOf'

errorIfNotArray(variable) // import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray'

errorIfNotBoolean(variable) // import {errorIfNotBoolean} from 'basic-data-handling/errorIfNotBoolean'

errorIfNotFloat(variable) // import {errorIfNotFloat} from 'basic-data-handling/errorIfNotFloat'

errorIfNotFunction(variable) // import {errorIfNotFunction} from 'basic-data-handling/errorIfNotFunction'

errorIfNotInteger(variable) // import {errorIfNotInteger} from 'basic-data-handling/errorIfNotInteger'

errorIfNotNumber(variable) // import {errorIfNotNumber} from 'basic-data-handling/errorIfNotNumber'

errorIfNotObject(variable) // import {errorIfNotObject} from 'basic-data-handling/errorIfNotObject'

errorIfNotString(variable) // import {errorIfNotString} from 'basic-data-handling/errorIfNotString'



// All these return boolean:

isArray(data)  // import {isArray} from 'basic-data-handling/isArray_notArray'

notArray(data)  //  import {notArray} from 'basic-data-handling/isArray_notArray'

isInteger(data)  // import {isInteger} from 'basic-data-handling/isInteger_isFloat'

notInteger(data)  //  import {notInteger} from 'basic-data-handling/isInteger_isFloat'

isFloat(data)  // import {isFloat} from 'basic-data-handling/isInteger_isFloat'

isEmpty(arrayOrString)  // import {isEmpty} from 'basic-data-handling/isEmpty_notEmpty'

notEmpty(arrayOrString)  // import {notEmpty} from 'basic-data-handling/isEmpty_notEmpty'
