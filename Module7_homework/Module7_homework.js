//Задание  1 

const client1 = {
    name: 'Alex',
    age: 30,
    country: 'USA'
  }
  
  const key1 = 'name';
  const key2 = 'age';
  const key3 = 'country';
  
  console.log(`${key1}: ${client1[key1]}, ${key2}: ${client1[key2]}, ${key3}: ${client1[key3]}`)

  //Задание 2 

  function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const client1 = {
    name: 'Alex', 
    age: 30,
    country: 'USA',
  };

console.log(showProps(client1, "name"));  
console.log(showProps(client1, "lastname")); 

//Задание 3 

function createObject () {
    return Object.create(null);
  }
  

  const obj = createObject();
  console.log(obj);
  console.log(Object.getPrototypeOf(obj));


//Задание 4 

function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isConnected = false;
  }
  // метод, который определяет прибор, включенный в розетку
  ElectricDevice.prototype.inConnected = function () {
    console.log(this.name + " is connected");
    this.isConnected = true;
  };
  //метод, который определяет, что прибео подключен к розетке
  ElectricDevice.prototype.getPowerUset=function(){
    return this.isConnected ? this.power:220;
  }
  const laptop = new ElectricDevice('laptop',100);
  const lamp = new ElectricDevice('lamp',50);
  const tv = new ElectricDevice('tv',120);
  
  console.log(laptop.getPowerUset() + lamp.getPowerUset() + tv.getPowerUset());
  
  laptop.inConnected();
  console.log(laptop.getPowerUset() + lamp.getPowerUset() + tv.getPowerUset());
  
  lamp.inConnected();
  console.log(lamp.getPowerUset() + tv.getPowerUset());
  
  tv.inConnected();
  console.log(lamp.getPowerUset() + tv.getPowerUset());


  // Задание 5 

  class ElectricDevice {
    constructor (name, power) {
      this.name = name;
      this.power = power;
      this.isConnected = false;
    }
    inConnected() {
      console.log(this.name + ' is connected');
      this.isConnected = true;
    }
    getPowerUset() {
      return this.isConnected ? this.power:100;
    }
  }
  const laptop = new ElectricDevice('laptop',100);
  const lamp = new ElectricDevice('lamp',50);
  const tv = new ElectricDevice('tv',120);

  console.log(laptop.getPowerUset() + lamp.getPowerUset() + tv.getPowerUset());
  
  laptop.inConnected();
  console.log(laptop.getPowerUset() + lamp.getPowerUset() + tv.getPowerUset());
  
  lamp.inConnected();
  console.log(lamp.getPowerUset() + tv.getPowerUset());
  
  tv.inConnected();
  console.log(lamp.getPowerUset() + tv.getPowerUset());


