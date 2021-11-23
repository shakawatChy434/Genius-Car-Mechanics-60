const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Midleware
app.use(cors());
app.use(express.json());


// First have to done previous work then complectd other's work

async function run() {
    try {
        await client.connect();
        const database = client.db("online-shop");
        const productCollection = database.collection("products");


        // create a document to insert 
        // Get Products API
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({});
            const products = await cursor.toArray();
            const count = await cursor.count();
            res.send({
                count,
                products,
            });
        })



    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);



// Testing Live site 
app.get('/', (req, res) => {
    res.send('Ema-John site connected')
})

// Testing Server site.
app.listen(port, () => {
    console.log('Getting connectd port on', port);
})