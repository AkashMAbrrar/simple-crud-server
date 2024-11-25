const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
// mongodb database

const uri =
  "mongodb+srv://madborakash48:FkvA2T13jNhOUXDo@cluster0.c4n3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// create data
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("usersDB");
    const userCollection = database.collection("users");
    //  get method for get data from database
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // post for create data on database
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user", user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// root route
app.get("/", (req, res) => {
  res.send("Simple crud server is running ");
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

/**
 * --- mongoDb info-----
 * : user name-:madborakash48
 * : password-:FkvA2T13jNhOUXDo
 *
 * mongodb+srv://madborakash48:FkvA2T13jNhOUXDo@cluster0.c4n3e.mongodb.net/
 * **/
