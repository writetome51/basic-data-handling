# basic-data-handling

This package contains functions that simply check if the passed argument meets a  
data type requirement.

To use any one of the functions below...  
If using TypeScript, just include its import statement  
(commented below each function).  
If using plain JavaScript, turn that 'import' statement into a  
'require' statement like so:

import {functionName} from 'basic-data-handling/fileContainingFunction'  

becomes this:

var functionName = require('basic-data-handling/fileContainingFunction').functionName;


## Functions that trigger fatal error if variable is not <br>required type (they all return void)

checkTypeOf(variable, expectedType)  
   // import {checkTypeOf} from 'basic-data-handling/checkTypeOf'

errorIfNotArray(variable)  
   // import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray'

errorIfNotBoolean(variable)  
   // import {errorIfNotBoolean} from 'basic-data-handling/errorIfNotBoolean'

errorIfNotFloat(variable)  
   // import {errorIfNotFloat} from 'basic-data-handling/errorIfNotFloat'

errorIfNotFunction(variable)  
   // import {errorIfNotFunction} from 'basic-data-handling/errorIfNotFunction'

errorIfNotInteger(variable)  
   // import {errorIfNotInteger} from 'basic-data-handling/errorIfNotInteger'

errorIfNotIntegerZeroOrGreater(variable)  
   // import {errorIfNotIntegerZeroOrGreater} from 'basic-data-handling/errorIfNotIntegerZeroOrGreater'

errorIfNotSet(variable)  
    // import {errorIfNotSet} from 'basic-data-handling/errorIfNotSet'

errorIfNotNumber(variable)  
   // errors if variable is not finite number.  
   // import {errorIfNotNumber} from 'basic-data-handling/errorIfNotNumber'  

errorIfNotObject(variable)   
   // import {errorIfNotObject} from 'basic-data-handling/errorIfNotObject'

errorIfNotPrimitive(variable)   
   // import {errorIfNotPrimitive} from 'basic-data-handling/errorIfNotPrimitive'

errorIfNotString(variable)  
   // import {errorIfNotString} from 'basic-data-handling/errorIfNotString'


## Functions that return boolean

isArray(variable)  
    // import {isArray} from 'basic-data-handling/isArray_notArray'

notArray(variable)  
   //  import {notArray} from 'basic-data-handling/isArray_notArray'

isString(variable)  
   //  import {isString} from 'basic-data-handling/isString_notString'

notString(variable)  
   //  import {notString} from 'basic-data-handling/isString_notString'

isFiniteNumber(variable)  
   // import {isFiniteNumber} from 'basic-data-handling/isFiniteNumber'

notFiniteNumber(variable)  
   // import {notFiniteNumber} from 'basic-data-handling/isFiniteNumber'

isInteger(variable)   
   // import {isInteger} from 'basic-data-handling/isInteger_isFloat'

notInteger(variable)   
   //  import {notInteger} from 'basic-data-handling/isInteger_isFloat'

isFloat(variable)   
   // import {isFloat} from 'basic-data-handling/isInteger_isFloat'

isEmpty(arrayOrString)    
   // import {isEmpty} from 'basic-data-handling/isEmpty_notEmpty'

notEmpty(arrayOrString)  
   // import {notEmpty} from 'basic-data-handling/isEmpty_notEmpty'

isSet(variable)  
   // returns true if variable is not undefined or null.  
   // import {isSet} from  'basic-data-handling/isSet_notSet'

notSet(variable)  
   // returns true if variable is undefined or null.  
   // import {notSet}  from 'basic-data-handling/isSet_notSet'