import printMyName from './moduleOne.mjs';
printMyName();



//названия переменных должны совпадать с экспортируемым модулем
import {
    one as oneRenamed,  //переменную можно переименовать
    two
} from './moduleOne.mjs';   
console.log(oneRenamed);
console.log(two);