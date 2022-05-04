// Конспект

/* //Удаление свойства у обьекта
const myCity = {
     city: 'Zhodino',
     popular: true,
     country: 'Belarus'
};
 delete myCity.country;  //delete - это оператор 'удаление'
console.log(myCity) */

/* //Доступ к значению св-ва объекта с использованием скобок
const myCity = {
    city: 'Zhodino'
};
myCity['popular'] = true;
console.log(myCity);
const countryPropertyName = 'country';
myCity[countryPropertyName] = 'USA';
console.log(myCity) */

/* //Вложенные св-ва у Объекта
const myCity = {
    city: 'Zhodino',
    popular: true,
       info: {
        oblast: 'Smolevichi',
        country: 'Belarus'
    }
};
console.log(myCity.info.oblast);
delete myCity.info['oblast'];
console.log(myCity) */


/*  //Сокращённый формат записи свойств объекта
  const name = 'Maksim';
  const postsQty = 23;
  const userProfile = {
      name,
      postsQty,
      hasSignedAgreement: false
  };
console.log(userProfile) */



/* //Конвертация JSON объектов
const post = {
    title: 'My post',
    likesQty: 5
};
const b = JSON.stringify(post);   // JSON.stringify(post) конвертируем в JSON объект
console.log(b);
const a = JSON.parse(b);     // JSON.parse(post) конвертируем из JSON обьект в обьект JS
console.log(a)  */



//Как избежать мутаций копии объекта
/*  //Вариант 1 (подойдёт если нету вложенных объектов в объекте)
const person = {
    name:  'Bob',
    age: 25
};
const person2 = Object.assign({}, person); //создали новый объект со всеми свойствами person (все ссылки на вложенные объекты в person сохраняются)
person2.age = 26;  //Изменяем св-во age только в объекте person2
console.log(person2.age);
console.log(person.age); */
/*   //Вариант 2 (ссылки на вложенные объекты также сохраняются)
const person = {
   name:  'Bob',
   age: 25
};
const person2 = { ...person };
person2.name = 'Jhon';  
console.log(person2.name);
console.log(person.name); */
/*  //Вариант 3 (Ссылки на вложенные объекты не сохраняются)
const person = {
    name: 'Bob',
    age: 25
};
const person2 = JSON.parse(JSON.stringify(person));
person2.name = 'Jhon';
console.log(person2.name);
console.log(person.name); */

/* //Функция
function f(a, b) {  //a, b параметры они же переменные
    let c;
    c = a + b;
    console.log(c);
    return c
};
f(1, 3);     //вызов функции где 1 и 3 это аргументы */

/*  //Передача значения по ссылке внешнего объекта
const personOne = {
    name: 'Bob',
    age: 21
};
function increasePersonAge(person) {   //Функция мутирует внешний объект (так не рекоммендуется делать)
    person.age += 3;
    return person
};
increasePersonAge(personOne);    //Передача обекта по ссылке
console.log(personOne.age);  */


/* //Передача значения через копию объекта без мутации
const personOne = {
    name: 'Bob',
    age: 21
};
function increasePersonAge(person) {                              //Функции не меняют внешние переменные
    const updatedPerson = Object.assign({}, person);  
    updatedPerson.age += 3;
    return updatedPerson
};
const updatedPersonOne = increasePersonAge(personOne);  
console.log(personOne.age);
console.log(updatedPersonOne.age) */


/*  //копируем св-ва из одного объекта в другом объекте при помощи оператора ...
const button = {
    width: 200,
    text: 'buy'
};
const redButton = {
    ...button,    //копируем св-ва оператором ...    если мутируем потом св-ва у объекта redButton, то у button ничего неизменится (если button нету вложенных объектов )
    color: 'red'
};
console.table(redButton) */

/* //Шаблонные строки
  const hello = 'Hello my name is';
   const greeting = `${hello} "Maksim" ${"Laurouski"}`; //выражение заключено в обратные кавычки
  console.log(greeting) */

/*   //Сокращения в стрелочных функциях
   a => {                 //Если один параметр, то круглые скобки можно опустить
       //Тело функции
   }

   (a, b) => a+b     //Фигурные скобки можно опустить, если тело функции состоит из одного выражения, return происходит автоматически
   */


/*  //Значения параметров функции по умолчанию пример 1 
  result = (value, multiplier = 3) => value * multiplier;
console.log(result(4,2));
console.log(result(4));  */

/* //Значения параметров функции по умолчанию пример 2 
const newPost = (post, addedAt = Date()) =>  ({    //нужно ставить ещё круглые скобки. Date() это оператор вызова текущей даты. Значения по умолчанию вычисляются в момент вызова функции
    ...post,
    addedAt
});
const firstPost = {
    id: 1,
    author: 'Maksim'
};
newPost(firstPost);
console.table(newPost(firstPost)) */

/*
  //Добавляем/удаляем в массивах элементы
const myArray = [1, 2, 3, 4];
console.log(myArray);
myArray[2] = 'abc';                 //поменяли элемент в массиве под индексом 2
console.log(myArray);
myArray.push(7);  //добавили в конец массива
console.log(myArray);
myArray.pop();  //удалили последний элемент массива
console.log(myArray);
const removedElement =  myArray.pop(); //удалили последний элемент массива (это число 4) и вернули его в эту переменную
console.log(myArray); //после объявления переменной removedElement, из myArray пропал элемент 4
console.log(removedElement);
myArray.unshift(5);  //добавили в начало массива элемент
console.log(myArray);
myArray.shift(5);  //удалили в начале массива элемент
console.log(myArray);
const myArrayNew = [1, 2, 3];
myArrayNew.forEach(el => console.log(el*2)); //Перебрали все элементы массива, вызвали консоль кол-во раз сколько и массивов умножив на 2
console.log(myArrayNew); //при этом оригинальный массив не изменился
const res1 = myArrayNew.forEach(el => console.log(el*2)); //При этом в forEach нету return
console.log(res1);  //Поэтому мы будем постоянно иметь undefined при объявлении в переменной
const res2 = myArrayNew.map(el => el*4); //map тот же forEach но имеет return и собирает новый массив
console.log(res2); //Видим что сформировался новый массив!!!!!
console.log(myArrayNew) // оригинальный массив остался неизменным    */

/* //Деструктуризация объектов
  const userProfile = {
      name: 'Maksim',
      commentsQty: 23,
      hasSignedAgreement: false
  }
const { name, commentsQty } = userProfile; //объявление новых переменных и присваивание значений на основе значений св-в объекта
const { hasSignedAgreement } = userProfile;
console.log(name);
console.log(hasSignedAgreement);
*/
/*
//Деструктуризация массивов
 const fruits = ['Apple', 'Banana'];
 const [fruitOne, fruitTwo] = fruits; //Объявление новых переменных и присваивание значений на основе элементов массива
  console.log(fruitOne);
  console.log(fruitTwo); */