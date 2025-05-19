

// 1. Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", 
// "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", 
// який дозволяє знімати гроші з рахунку. 
// Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. 
// Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: "Taras Simkov",
    accountNumber: "152 31628667",
    balance: 5000,


    deposit() {
        
        const amount = confirm("Бажаєте поповнити рахунок?");
        if (!result) {
            console.log("Невірна сума.");
            return;

            
        } else {
            const userAmount = Number(prompt("Введіть суму для поповнення:"));
            this.balance = this.balance + userAmount;
            alert(`Поповнення успішне. Залишок на рахунку: ${this.balance} грн.`)
        }


    },


    withdraw(money) {
        if (money > this.balance) {
            alert("Недостатньо коштів або некоректна сума.")
        } else {
            this.balance = this.balance - money;
            alert(`Зняття успішне. Залишок на рахунку: ${this.balance} грн.`)
        }
    },

    

}
    if (confirm("Хочете поповнити?")) {
        const suma = parseFloat(prompt("Введіть суму для зняття:"));
        if (!isNaN(suma)) {
            bankAccount.balance += suma;
            alert(`Баланс поповпнено, Залишок ${bankAccount.balance}`)
        }
    }

bankAccount.withdraw(700)
console.log(bankAccount);

  
  // 2. Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
//   Додайте до об'єкту метод, який повертає "true", 
// якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. 
// Температуру потрібно отримати з prompt(). 
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки.

  const weather = {
    temperature: 0,
    humidity: 70,
    windSpeed: 10,


    isBelowThreshold(threshold) {
        const temp = prompt("Введіть температуру в °C:");
        this.temperature = Number(temp);
        if (isNaN(this.temperature)) {
            alert("щось інше");
            return;
        };
    
    
    if (this.temperature < threshold) {
        alert(`Температура нижче 0 градусів Цельсія ${threshold}`);
        return true;
    } else {
        alert(`Температура вище або дорівнює 0 градусів Цельсія ${threshold}`)
        return false;
    }
    }
    }
    
     
    weather.isBelowThreshold(0);

  
  // 3.Створіть об’єкт "user", який буде мати властивості "name", "email", "password". 
//   Додайте метод "login", який буде перевіряти правильність введеного email та password. \

  const user = {
    name: "Taras",
    email: "Simkovtaras9@gmail.com",
    password: "2010132605",

    login() {
        const inputEmail = prompt("Введіть Ваш email:");
        const inputPassword = prompt("Введіть свій пароль:");
    
        if (inputEmail === this.email && inputPassword === this.password) {
            alert("Вхід успішний!");
        } else {
            alert("Невірний email або пароль.");
        }
    }
    }
    
    user.login()


  // 4. Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
//   Додайте до об'єкту метод, який повертає "true", 
// якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
// Вивести значення властивостей в консоль. 

const movie = {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    rating: 7.8,
  
    isHighlyRated() {
      return this.rating > 8;
    }
  };
  

  if (movie.isHighlyRated()) {
    console.log("Рейтинг більше 8");
  } else {
    console.log("Менше 8 балів");
  }
  

  console.log(movie.title);
  console.log(movie.director);
  console.log(movie.year);
  console.log(movie.rating);
  console.log(movie.isHighlyRated());
  
  