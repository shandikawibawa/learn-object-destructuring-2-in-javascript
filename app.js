// in boject destructuring order doesn't matter but the name does matter
const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just like you", singer: "NF", duration: 3.23 },
    { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.32 },
    { name: "Old Town Road", singer: "Lil Nas x", duration: 1.43 },
    { name: "Cold Sholder", singer: "Central", duration: 5.23 },
];

const [, , , , {singer: s}] = songs;
console.log(s);

//===============================================//

const data = {
    user: {
        id: 123,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            city: "New York",
            country: "USA",
        },
        hobbies: ["Reading", "Painting", "Cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },
    },
    product: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 1, name: "Laptop", price: 800 },
        { id: 1, name: "Laptop", price: 500 },
    ],
    settings: {
        darkMode: true,
        notification: {
            email: true,
            sms: false,
            pash: true,
        },
        language: "English",
    },
};

const {
    user: {
        name, 
        age, 
        address: {city, country},
        hobbies,
        scores: {math, science, history},
        email,
    },
    product: [product1, product2, product3],
    settings: {
        darkMode,
        notification: {
            email: emailNotification,
            sms: smsNotification,
            pash: pushNotification, // Corrected to match data
        },
        language,
    },
} = data;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notification: ${emailNotification}`);
console.log(`SMS Notification: ${smsNotification}`);
console.log(`Push Notification: ${pushNotification}`);
console.log(`Language: ${language}`);
