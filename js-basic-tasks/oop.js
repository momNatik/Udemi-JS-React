// ООП - обьектно ориентированное программирование
const soldier = {
    health: 500,
    armor: 100,
    sayHello: function() {
      console.log('Hello');
    } 
  };
  
  const jonh = {
    health: 100,
  };

   // установили прототип от уже созданного джона к солдату, теперь он наследует все его свойства
  Object.setPrototypeOf(jonh, soldier);
 
  
    // установили прототип на этапе создания
  const andry = Object.create(soldier);
