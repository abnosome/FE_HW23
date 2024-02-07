//Текст задачи: У вас есть массив объектов, каждый из которых представляет собой человека с полями "имя" и "возраст". Напишите функцию на TypeScript, которая сортирует этот массив по возрастанию возраста.
import { User } from "./type/User";
import { Products } from "./type/Products";
import { Book } from "./type/Book";
import { Students } from "./type/Sudents";
import { Items } from "./type/Items";
import { Car } from "./type/Car";


function sortByAge(users: User[]): User[] {
    return users.sort((a, b) => a.age - b.age);
}

const users: User[] = [
    { firstName: "Anja",  age: 20 },
    { firstName: "Max",  age: 2 },
    { firstName: "Olga",  age: 28 },
    { firstName: "Anton",  age: 120 },
    { firstName: "Mikhail",  age: 70 } 
];

const sortedUsers = sortByAge(users);
console.log(sortedUsers);

//У вас есть массив объектов, представляющих товары в интернет-магазине. Напишите функцию, которая фильтрует товары по заданной цене (например, все товары, дешевле 50 долларов).
const products: Products[] = [
    { title: "Футболка", price: 15.99 },
    { title: "Джинсы", price: 29.99 },
    { title: "Кроссовки", price: 49.99 },
    { title: "Рюкзак", price: 39.99 },
    { title: "Часы", price: 99.99 } 
];

function filterByPrice(products: Products[]): Products[] {
    const maxPrice = 50; 
    return products.filter(product => product.price < maxPrice);
}

const filteredProducts = filterByPrice(products);
console.log(filteredProducts);

//У вас есть массив объектов, представляющих книги. Напишите функцию, которая находит книгу по её названию.
const books: Book[] = [
    { title: "1984" },
    { title: "Убить пересмешника" },
    { title: "Великий Гэтсби" },
    { title: "Гордость и предубеждение" },
    { title: "Над пропастью во ржи" }
];

function findABook(title: string): Book | undefined {
    return books.find(book => book.title === title);
}
const foundBook = findABook("1984");

//У вас есть массив объектов, представляющих продукты с полем "цена". Напишите функцию, которая вычисляет общую сумму цен продуктов.
function totalPrice(products: Products[]): number {
    let total = 0;
   
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

const total = totalPrice(products);
console.log("Total Price:", total);

//У вас есть массив объектов, представляющих студентов с полями "имя" и "оценка". Напишите функцию, которая обновляет оценку студента по его имени. Функция получает в качестве аргументов имя студента и новую оценку.
const students: Students[] = [
    { name: "Алексей", mark: 4 },
    { name: "Елена", mark: 5 },
    { name: "Иван", mark: 3 },
    { name: "Мария", mark: 5 },
    { name: "Петр", mark: 4 }
];

function newMark(name: string, newMark: number): Students | undefined {
    const studentToUpdate = students.find(student => student.name === name);
    if (studentToUpdate) {
        studentToUpdate.mark = newMark;
        return studentToUpdate;
    } else {
        console.log(`Студент с именем ${name} не найден.`);
        return undefined;
    }
}

const newStMark = newMark("Алексей", 3);
console.log(newStMark);

//У вас есть массив объектов, представляющих заказы с полем "статус" (например, "в обработке" или "доставлено"). Напишите функцию, которая подсчитывает количество заказов с определенным статусом.
const items: Items[] = [
    { status: "в обработке" },
    { status: "доставка" },
    { status: "в обработке" },
    { status: "отсутствует на складе" },
    { status: "доставка" }
];

function countItemsWithStatus(items: Items[], targetStatus: string): number {
    return items.filter(item => item.status === targetStatus).length;
}

const targetStatus = "доставка";
const count = countItemsWithStatus(items, targetStatus);
console.log(`Количество заказов со статусом "${targetStatus}": ${count}`);

//Текст задачи: У вас есть массив объектов, представляющих товары с полем "цена". Напишите функцию, которая находит товар с максимальной ценой. Если таких товаров несколько, верните первый
function findProductWithMaxPrice(products: Products[]): Products | undefined {
    if (products.length === 0) {
        return undefined;
    }

    let maxPriceProduct = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > maxPriceProduct.price) {
            maxPriceProduct = products[i];
        }
    }
    return maxPriceProduct;
}

const productWithMaxPrice = findProductWithMaxPrice(products);
console.log("Товар с максимальной ценой:", productWithMaxPrice);

//У вас есть массив объектов, представляющих автомобили с полями "марка" и "год выпуска". Напишите функцию, которая фильтрует автомобили по марке и году выпуска
const cars: Car[] = [
    { brand: "Toyota", year: 2005 },
    { brand: "BMW", year: 2023 },
    { brand: "Honda", year: 2016 },
    { brand: "Toyota", year: 2011 },
    { brand: "Audi", year: 2024 }
];

function filterCarsByBrandAndYear(cars: Car[], brand: string, year: number): Car[] {
    return cars.filter(car => car.brand === brand && car.year === year);
}

const filteredCars = filterCarsByBrandAndYear(cars, "Toyota", 2017);
console.log("Отфильтрованные автомобили:", filteredCars);