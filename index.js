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
function increasePersonAge(person) { 
    const updatedPerson = Object.assign({}, person);  
    updatedPerson.age += 3;
    return updatedPerson
};
const updatedPersonOne = increasePersonAge(personOne);  
console.log(personOne.age);
console.log(updatedPersonOne.age) */