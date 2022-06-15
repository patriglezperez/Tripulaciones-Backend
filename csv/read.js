const fs = require('fs');
const csv = require('csv');


const { CreateClient } = require("../managers/ClientManager"); ///
const { FindStore, CreateStore } = require('../managers/StoreManager');
const { CreateAssessment } = require("../managers/AssessmentManager");
const { CreateEcommerce } = require("../managers/EcommerceManager");
const { CreateOrders } = require("../managers/OrdersManager");
const { CreateOrdersEcommerce } = require("../managers/OrdersEcommerce");



// Acordaros de hacer primero: npx sequelize-cli db:migrate
//"./csv/client.csv", 
const arrayFileName = ["./csv/client.csv", "./csv/store.csv", "./csv/assessments.csv", "./csv/ecommers.csv", "./csv/orders.csv", "./csv/orders_ecommerce.csv"];
const arrayStore = ["7985fff7-8168-4889-8362-bea18c3cfade", "9368681d-bbb5-4bd8-b9e9-b511f9749a18","ae291ed4-d1a3-4b98-905b-4a0f230c6b4f"];
const arrayClient = ["252b8564-4616-478a-acbf-dea45a589d01","d4fc0c59-9f53-409d-bb32-b1e8fb1fdddd","255ab26b-707d-4260-a7e2-5c6652dfd038"];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) //sleep

function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
async function readCSV(fileName) {
    try {
        //const fileName = "./retail_definitivo.csv";
        let data = [];

        var input = fs.createReadStream(fileName);
        var parser = csv.parse({
            columns: true,
            relax: true
        });

        parser.on('readable', () => {
            while(line = parser.read()) {
                //console.log("line: ", line);
                const parada = async () => delay(1000); /// waiting 1 second.
                parada();
                /* if (fileName === "./csv/client.csv") {
                    let name = line.client_name.split(" ");
                    line.client_name = name[0];
                    line.client_last_name = name[1];
                    const client = async () => CreateClient(line);
                    client();
                }
                if (fileName === "./csv/store.csv") {
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
                } */
                /* if (fileName === "./csv/orders.csv") {
                    line.uuid_client = arrayClient[between(0, 3)];
                    line.uuid_store = arrayStore[between(0, 3)];
                    const orders = async () => CreateOrders(line);
                    orders();
                } */
                if (fileName === "./csv/orders_ecommerce.csv") {
                    console.log(line);
                    const ordersEcommerce = async () => CreateOrdersEcommerce(line);
                    ordersEcommerce();
                }
                //console.log(line);
            }
        });

        parser.on('end', () => {
            console.log("data");
            /* inserter.drain = function() {
            doneLoadingCallback();
            } */
        });

        input.pipe(parser); 
    } catch (err) {
        console.log("Error:", err);
    } 
}

/* arrayFileName.forEach(async e => { await readCSV(e); }) */


async function load(req, res) {
    try {
        //readCSV("./csv/client.csv");
        arrayFileName.forEach(async e => readCSV(e))

        res.json({"todo cojonudo": "todo cojonudo"});

    } catch (err) {
        res.status(500).json("Server Error");
    }
}

module.exports = load;