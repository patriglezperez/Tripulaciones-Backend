const fs = require('fs');
const csv = require('csv');


const { CreateClient } = require("../managers/ClientManager"); ///
const { CreateStore } = require('../managers/StoreManager');
const { CreateAssessment } = require("../managers/AssessmentManager");
const { CreateEcommerce } = require("../managers/EcommerceManager");
const { CreateOrders } = require("../managers/OrdersManager");
const { CreateOrdersEcommerce } = require("../managers/OrdersEcommerce");


// Eliminar las tablas si las teneis en el postgert
// Acordaros de hacer primero: npx sequelize-cli db:migrate
// Eso declara las tablas
// Arracar el back
// Llamar ya sea por postman o front al endpoint: http://localhost:3003/load


const arrayFileName = ["./csv/client.csv", "./csv/store.csv", "./csv/assessments.csv", "./csv/ecommers.csv", "./csv/orders.csv", "./csv/orders_ecommerce.csv"];
const arrayStore = ["7985fff7-8168-4889-8362-bea18c3cfade", "9368681d-bbb5-4bd8-b9e9-b511f9749a18","ae291ed4-d1a3-4b98-905b-4a0f230c6b4f"];
const arrayClient = ["252b8564-4616-478a-acbf-dea45a589d01","d4fc0c59-9f53-409d-bb32-b1e8fb1fdddd","255ab26b-707d-4260-a7e2-5c6652dfd038"];
const arrayOrder = ["5c75dbfd-803f-4075-8009-010258356112","27f3ac0e-95e2-48d9-8577-d0b9bba6572a","50163a68-da23-46ee-9d01-e2d20433a18a"];
const arrayEcommerce = ["f31f0c43-24ad-4e3f-859b-fe7de4210231","38e710e1-ffa8-4f14-b9fd-edd39996d3f5","8a146f5d-74e7-4e48-abd0-e83e07354e0b"];


function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
async function readCSV(fileName) {
    try {
        var input = fs.createReadStream(fileName);
        var parser = csv.parse({
            columns: true,
            relax: true
        });

        parser.on('readable', () => {
            while(line = parser.read()) {
                /* if (fileName === "./csv/client.csv") {
                    let name = line.client_name.split(" ");
                    line.client_name = name[0];
                    line.client_last_name = name[1];
                    const client = async () => CreateClient(line);
                    client();
                } */
                if (fileName === "./csv/store.csv") {
                    line.assessment = between(1, 5);
                    const store = async () => CreateStore(line);
                    store();
                }
                if (fileName === "./csv/assessments.csv") {
                    line.uuid_client = arrayClient[between(0, 3)];
                    line.uuid_store = arrayStore[between(0, 3)];
                    const assessments = async () => CreateAssessment(line);
                    assessments();
                }
                if (fileName === "./csv/ecommers.csv") {
                    const ecommers = async () => CreateEcommerce(line);
                    ecommers();
                }
                if (fileName === "./csv/orders.csv") {
                    line.uuid_client = arrayClient[between(0, 3)];
                    line.uuid_store = arrayStore[between(0, 3)];
                    const orders = async () => CreateOrders(line);
                    orders();
                } 
                if (fileName === "./csv/orders_ecommerce.csv") {
                    line.uuid_order = arrayOrder[between(0, 3)];
                    line.uuid_ecommerce = arrayEcommerce[between(0, 3)];
                    const ordersEcommerce = async () => CreateOrdersEcommerce(line);
                    ordersEcommerce();
                }
            }
        });

        parser.on('end', () => {
            console.log("data");
        });

        input.pipe(parser); 
    } catch (err) {
        console.log("Error:", err);
    } 
}


async function load(req, res) {
    try {
        arrayFileName.forEach(async e => readCSV(e))

        res.json({"todo cojonudo": "todo cojonudo"});

    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = load;