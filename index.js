function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
let firstScooter = new Scooter("1991", "yellow", "X")

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
let sav = new Driver("Sav", "29", "meh")

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
let home = new PickupLocation("home address", "Chicago")