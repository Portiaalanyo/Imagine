const myButton = document.getElementById('btn');
myButton.onclick = function() {
const name = prompt('Enter your full name.');
document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let name ='Portia Alanyo';
let age = '15';
let present = 'false';
console.log(name);

// object
const car = {
    numberPlate: 'GR-345-24',
    model: 'Benz',
    color: 'Black',
    weight:'50',
    weightunit: 'KG',
    owner: {
        name: 'Portia Alanyo',
        driver: {
            name: 'Nana',
            license:'',
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);


// Arrays

const tweet1 = {
    text:'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets: 1,
  }
  
  const tweet2 = {
    text:'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweets: 0,
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets
  
  // Date
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  //if/Else
  if (today.getHours()== 16) {
    console.log('Class has ended!');
  } else {
      console.log('Class is in session');
    
    
    //for loop
    for (let i = 0; i <=10; i++) {
      console.log('Notify friends!', i);
    }
    }


    car.model = 'porche'; 
    console.log(car.model);

car.owner.driver.name = 'Nadu';
console.log(car.owner.driver.name);