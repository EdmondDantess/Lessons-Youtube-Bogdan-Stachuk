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





