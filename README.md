# basic-data-handling

This package contains functions that simply check if the passed argument meets a  
data type requirement.

## To use any one of the functions below...  

<b>If using TypeScript</b>, include the function's import statement  
(commented below each function).  

<b>If using plain JavaScript</b>, turn that 'import' statement into a  
'require' statement like so:
```
import {functionName} from 'basic-data-handling/fileContainingFunction'  

becomes this:

var functionName = require('basic-data-handling/fileContainingFunction').functionName;
```

## Functions that throw Error if `arg` is not <br>required type (they all return void)

checkTypeOf(arg, expectedType)  
`// Performs typeof check on arg.  If arg is not expectedType, throws Error.`  
`// import {checkTypeOf} from 'basic-data-handling/checkTypeOf' `

errorIfNotArray(arg)  
`// import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray' `

errorIfNotBoolean(arg)  
`// import {errorIfNotBoolean} from 'basic-data-handling/errorIfNotBoolean' `

errorIfNotDefined(arg)  
`// errors if arg is undefined or null.`  
`// import {errorIfNotDefined} from 'basic-data-handling/errorIfNotDefined' `

errorIfNotFloat(arg)  
`// import {errorIfNotFloat} from 'basic-data-handling/errorIfNotFloat' `

errorIfNotFunction(arg)  
`// import {errorIfNotFunction} from 'basic-data-handling/errorIfNotFunction' `

errorIfNotInteger(arg)  
`// import {errorIfNotInteger} from 'basic-data-handling/errorIfNotInteger' `

errorIfNotIntegerZeroOrGreater(arg)  
`// import {errorIfNotIntegerZeroOrGreater} from 'basic-data-handling/errorIfNotIntegerZeroOrGreater' `

errorIfNotNumber(arg)  
`// errors if arg is not finite number.`  
`// import {errorIfNotNumber} from 'basic-data-handling/errorIfNotNumber' `

errorIfNotObject(arg)   
`// errors if arg is string, boolean, number, function, null, or undefined.`  
`// import {errorIfNotObject} from 'basic-data-handling/errorIfNotObject' `

errorIfNotPrimitive(arg)   
`// import {errorIfNotPrimitive} from 'basic-data-handling/errorIfNotPrimitive' `

errorIfNotString(arg)  
`// import {errorIfNotString} from 'basic-data-handling/errorIfNotString' `


## Functions that return boolean

isArray(arg)  
`// import {isArray} from 'basic-data-handling/isArray_notArray' `

notArray(arg)  
`// import {notArray} from 'basic-data-handling/isArray_notArray' `

isObject(arg)  
`// Arrays ARE considered objects. `   
`// Does NOT consider null an object. `  
`// Does NOT consider functions objects. `    
`// import {isObject} from 'basic-data-handling/isObject_notObject' `

notObject(arg)  
`// Returns true if arg is string, boolean, number, function, null, or undefined.`   
`// import {notObject} from 'basic-data-handling/isObject_notObject' `

isString(arg)  
`// import {isString} from 'basic-data-handling/isString_notString' `

notString(arg)  
`// import {notString} from 'basic-data-handling/isString_notString' `

isFiniteNumber(arg)  
`// import {isFiniteNumber} from 'basic-data-handling/isFiniteNumber' `

notFiniteNumber(arg)  
`// import {notFiniteNumber} from 'basic-data-handling/isFiniteNumber' `

isInteger(arg)  
`// import {isInteger} from 'basic-data-handling/isInteger_isFloat' `

notInteger(arg)   
`// import {notInteger} from 'basic-data-handling/isInteger_isFloat' `

isFloat(arg)   
`// import {isFloat} from 'basic-data-handling/isInteger_isFloat' `

isEmpty(arrayOrString)   
`// import {isEmpty} from 'basic-data-handling/isEmpty_notEmpty' `

notEmpty(arrayOrString)  
`// import {notEmpty} from 'basic-data-handling/isEmpty_notEmpty' `

isDefined(arg)  
`// returns true if arg is not undefined or null.`  
`// import {isDefined} from  'basic-data-handling/isDefined_notDefined' `

notDefined(arg)  
`// returns true if arg is undefined or null.`  
`// import {notDefined} from 'basic-data-handling/isDefined_notDefined' `


## Installation
`npm i  basic-data-handling`
