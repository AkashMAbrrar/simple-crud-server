/**
 * --------------------------
 * Mongodb
 * 1: create account
 * 2: create an user with password
 * 3: whitelist ip address
 * 4: database > connect > driver > Node > view full code
 * 5: change the password in the uri
 * ---------------------------
 *
 *
 * 1: Create -- POST
 * 2: app.post("/users", async(req,res) => {})
 * 3: Make the function async to use await inside it
 * 4: Make sure you use the express.json() -> Middleware
 * 5: doc (node mongodb crud)
 * 6: access data from the body : const user = req.body
 * 7: const result = await userCollection.insertOne(user)
 * 8: res.send(result)
 *
 * **/

/**
 *  ----------CLIENT SIDE---------
 * A (CRUD -> Create)
 * 1: create fetch()
 * 2: add second parameter as an object
 * 3: provide method: 'POST',
 * 4: add headers: {'content-type': 'application/json'}
 * 5: add body: JSON.Stringify(user)
 * -------------------------------
 *
 *
 * B (CRUD -> READ  many -> server)
 * 1: create a cursor = userCollection.find()
 * 2: const result = await cursor.toArray()
 *
 *
 * --------------------
 *  (CRUD -> DELETE)->server side
 * --------------------
 * 1: create app.delete('/users/:id', async(req,res) => {})
 * 2: specify unique ObjectId to delete the right user
 * 3: const query = {_id: new ObjectId(id) };
 * 4: const result = await userCollection.deleteOne(query);
 *
 * _------------CLIENT (delete) SIDE-----------
 * 1: create dynamic url with id
 * 2: mention the DELETE method
 * 3: for delete and remove from the ui we have to declare a state hook
 * 4: const [user,setUser] = useState(loadUserData)
 * 
 * 6 const handleDelete = (_id) => {
    console.log("delete by id", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
 *
 *
 *
 *
 * **/
