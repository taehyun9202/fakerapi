const express = require("express");
const cors = require("cors");
const faker = require("faker")
const port = 8000;

app = express();
app.use( cors () );
randomName = faker.name.findName();

class Person{
    constructor() {
        this.fristname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress(); 
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode =faker.address.zipCode();
        this.country =faker.address.country();
    }
}

app.get("/api/companies/new", (req, res) => {
    newCompany = new Company();
    res.json({newCompany});
});
app.get("/api/users/new", (req, res) => {
    newPerson = new Person();
    res.json({newPerson});
});

app.get("/api/user/company", (req, res) => {
    newCompany = new Company();
    newPerson = new Person();
    res.json({newPerson, newCompany});
});

app.listen(port, () => console.log(`listening on port ${port}`));