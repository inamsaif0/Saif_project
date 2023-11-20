const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51O5OVqAHImOQxPedYnCX6ShAqz2tGsMvTgRlxmyrHVp956iNP2ExXqwN5Ke0magm9cHrKVdNbYuTBadftqXLJIjj00YX27lW7K');
const app = express();


// app.use(
//     cors({
//         origin: ["http://localhost:3002"],
//         methods: ["GET", "POST"],
//         credentials: true,
//     })
// );


app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contact"
})

const calculateOrderAmount = items => {
    return 3000;
}
app.post("/create-payment-intent",async(req,res)=>{
    const {items} = req.body;
    const paymentIntent=await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "inr",
        statement_descriptor_suffix: "Payment using Stripe",
        automatic_payment_methods: {
            enabled: true
        }
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});


app.post('/api/selected-buttons', async (req, res) => {
    try {
      const { tag, image } = req.body;
      const connection = await mysql.createConnection(dbConfig);
      const [results] = await connection.execute('INSERT INTO selected_buttons (tag, image) VALUES (?, ?)', [
        tag,
        image,
      ]);
      connection.end();
      res.json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error('Error storing data:', error);
      res.status(500).json({ error: 'Failed to store data' });
    }
  });



app.get("/success",(req,res)=>{
    res.send("Payment Successful! Thankyou for your purchase.");
});
app.get("/cancel",(req,res)=>{
    res.send("Payment Canceled! Your order was not processed.");
});



app.get("/contactus", (req, res) => {
    db.query(
        "SELECT * FROM contactus",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/orders", (req, res) => {
    db.query(
        "SELECT * FROM combine_result",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step1", (req, res) => {
    db.query(
        "SELECT * FROM step1",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step2", (req, res) => {
    db.query(
        "SELECT * FROM step2",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step2_logo", (req, res) => {
    db.query(
        "SELECT * FROM step2_logo",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step2_web", (req, res) => {
    db.query(
        "SELECT * FROM step2_web",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step2_video", (req, res) => {
    db.query(
        "SELECT * FROM step2_video",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step2_mobile", (req, res) => {
    db.query(
        "SELECT * FROM step2_mobile",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step3", (req, res) => {
    db.query(
        "SELECT * FROM step3",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/step4", (req, res) => {
    db.query(
        "SELECT * FROM step4",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/user_orders", (req, res) => {
    db.query(
        "SELECT * FROM user_orders",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});



// CRUD operations

// Create
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const insertQuery = `INSERT INTO items (name, description) VALUES (?, ?)`;
  db.query(insertQuery, [name, description], (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId });
  });
});

// Read all
app.get('/items', (req, res) => {
  const selectAllQuery = `SELECT * FROM items`;
  db.query(selectAllQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Read one
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const selectOneQuery = `SELECT * FROM items WHERE id = ?`;
  db.query(selectOneQuery, [itemId], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Update
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const { name, description } = req.body;
  const updateQuery = `UPDATE items SET name = ?, description = ? WHERE id = ?`;
  db.query(updateQuery, [name, description, itemId], (err) => {
    if (err) throw err;
    res.json({ message: 'Item updated successfully' });
  });
});

// Delete
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const deleteQuery = `DELETE FROM items WHERE id = ?`;
  db.query(deleteQuery, [itemId], (err) => {
    if (err) throw err;
    res.json({ message: 'Item deleted successfully' });
  });
});


app.post('/contact', (req,res)=>{
    const sql = "INSERT INTO contactus (`name`,`email`,`projectname`,`message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.projectname,
        req.body.message
    ]
    db.query(sql, [values], (err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/custom_quote', (req,res)=>{
    const sql = "INSERT INTO custom_quote (`name`,`email`,`projectname`,`message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.projectname,
        req.body.message
    ]
    db.query(sql, [values], (err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/cutom_quote', (req,res)=>{
    const sql = "INSERT INTO cutom_quote (`name`,`email`,`number`,`website`,`budget`,`message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.number,
        req.body.website,
        req.body.budget,
        req.body.message
    ]
    db.query(sql, [values], (err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.post('/step1', (req,res)=>{
    const sql = "INSERT INTO step1 (`company`,`companyslogan`) VALUES (?)";
    const values = [
        req.body.company,
        req.body.companyslogan
    ]
    db.query(sql, [values], (err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.post('/api/selected-buttons', async (req, res) => {
  try {
    const { tag, image } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute('INSERT INTO selected_buttons (tag, image) VALUES (?, ?)', [
      tag,
      image,
    ]);
    connection.end();
    res.json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ error: 'Failed to store data' });
  }
});


app.post('/api/save-services', (req, res) => {
    const { selectedOptions } = req.body;
  
    // Insert the selected services into the database
    const query = 'INSERT INTO user_services (service_name) VALUES ?';
    const values = selectedOptions.map((option) => [option]);
  
    db.query(query, [values], (err, result) => {
      if (err) {
        console.error('Database insertion error: ' + err.message);
        res.status(500).json({ error: 'Error saving selected services' });
      } else {
        res.status(200).json({ message: 'Selected services saved successfully' });
      }
    });
  });
app.post('/checkout', (req,res)=>{
    const sql = "INSERT INTO checkout (`yourname`,`youremail`,`address`,`city`,`state`,`zip`,`cardname`,`cardnumber`) VALUES (?)";
    const values = [
            req.body.yourname,
            req.body.youremail,
            req.body.address,
            req.body.city,
            req.body.state,
            req.body.zip,
            req.body.cardname,
            req.body.cardnumber
    ]
    db.query(sql, [values], (err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

  
  app.post('/step2', (req, res) => {
    const { selections } = req.body;
    const sql = 'INSERT INTO step2 (logo, web, video, mobile) VALUES (?, ?, ?, ?)';
    db.query(sql, [selections.logo, selections.web, selections.video, selections.mobile], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  

  app.post('/step3', (req, res) => {
    const { step3 } = req.body;
    const sql = 'INSERT INTO step3 (agriculture, art, construction, business,children,religious,fashion,food,games,health,travel,education,pet,home,realestate,securit,law,beauty,creative,sports,science,transport,music,other) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [step3.agriculture, step3.art, step3.construction, step3.business , step3.children, step3.religious, step3.fashion, step3.food, step3.games, step3.health, step3.travel, step3.education, step3.pet, step3.home, step3.realestate, step3.securit, step3.law, step3.beauty, step3.creative, step3.sports, step3.science, step3.transport, step3.music, step3.other], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  app.post('/step2_logo', (req, res) => {
    const { step3 } = req.body;
    const sql = 'INSERT INTO step2_logo (agriculture, art, construction, business,children,religious,fashion,food,games,health,travel,education,pet,home,realestate,securit,law,beauty,creative,sports,science,transport,music,other) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [step3.agriculture, step3.art, step3.construction, step3.business , step3.children, step3.religious, step3.fashion, step3.food, step3.games, step3.health, step3.travel, step3.education, step3.pet, step3.home, step3.realestate, step3.securit, step3.law, step3.beauty, step3.creative, step3.sports, step3.science, step3.transport, step3.music, step3.other], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });

  app.post('/color_picker', (req, res) => {
    const { selections } = req.body;
    const sql = 'INSERT INTO color_picker (red, pink,purple, blue,aqua, green,orange, grey,yellow, brown,multi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [selections.red, selections.pink, selections.purple, selections.blue, selections.aqua, selections.green, selections.orange, selections.grey, selections.yellow, selections.brown, selections.multi], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });

  app.post('/brief', (req, res) => {
    const { selections } = req.body;
    const sql = 'INSERT INTO brief (emblem, illustrated,silhouette, abstract,fontbased, calligraphic,initials, mascot) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [selections.emblem, selections.illustrated, selections.silhouette, selections.abstract, selections.fontbased, selections.calligraphic, selections.initials, selections.mascot], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  

  app.post('/step2_web', (req, res) => {
    const { step3 } = req.body;
    const sql = 'INSERT INTO step2_web (agriculture, art, construction, business,children,religious,fashion,food,games,health,travel,education,pet,home,realestate,securit,law,beauty,creative,sports,science,transport,music,other) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [step3.agriculture, step3.art, step3.construction, step3.business , step3.children, step3.religious, step3.fashion, step3.food, step3.games, step3.health, step3.travel, step3.education, step3.pet, step3.home, step3.realestate, step3.securit, step3.law, step3.beauty, step3.creative, step3.sports, step3.science, step3.transport, step3.music, step3.other], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });

  app.post('/website_type', (req, res) => {
    const { selections } = req.body;
    const sql = 'INSERT INTO website_type (html, cms, ecom, portal) VALUES (?, ?, ?, ?)';
    db.query(sql, [selections.html, selections.cms, selections.ecom, selections.portal], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  

  app.post('/step2_video', (req, res) => {
    const { step3 } = req.body;
    const sql = 'INSERT INTO step2_video (agriculture, art, construction, business,children,religious,fashion,food,games,health,travel,education,pet,home,realestate,securit,law,beauty,creative,sports,science,transport,music,other) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [step3.agriculture, step3.art, step3.construction, step3.business , step3.children, step3.religious, step3.fashion, step3.food, step3.games, step3.health, step3.travel, step3.education, step3.pet, step3.home, step3.realestate, step3.securit, step3.law, step3.beauty, step3.creative, step3.sports, step3.science, step3.transport, step3.music, step3.other], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  app.post('/step2_mobile', (req, res) => {
    const { step3 } = req.body;
    const sql = 'INSERT INTO step2_mobile (agriculture, art, construction, business,children,religious,fashion,food,games,health,travel,education,pet,home,realestate,securit,law,beauty,creative,sports,science,transport,music,other) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [step3.agriculture, step3.art, step3.construction, step3.business , step3.children, step3.religious, step3.fashion, step3.food, step3.games, step3.health, step3.travel, step3.education, step3.pet, step3.home, step3.realestate, step3.securit, step3.law, step3.beauty, step3.creative, step3.sports, step3.science, step3.transport, step3.music, step3.other], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  app.post('/mobile_application', (req, res) => {
    const { selections } = req.body;
    const sql = 'INSERT INTO mobile_application (ios, android) VALUES (?, ?)';
    db.query(sql, [selections.ios, selections.android], (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Selections stored successfully' });
      }
    });
  });
  


app.post('/step4', (req,res)=>{
    let getdata;
    let data12 = 0;
    let yourname = '';
    let youremail = '';
    let yourcompanyname = '';
    let yourcompanyemail = '';

    const query = 'SELECT MAX(cid) AS max_cid FROM step1';

  const data1 =  db.query(query, (err, data) => {
        if (err) {
            return res.status(500).json(err); // Send an error response and return
        }
        
        data12 = data[0].max_cid; 
        console.log(data12,'hello i am here')
        
    });
    
    setTimeout(function(){
        console.log(data12, 'hello')
    
        const sql = "INSERT INTO step4 (`yourname`,`youremail`, `company_id`) VALUES (?)";
        const values = [
            req.body.yourname,
            req.body.youremail,
            data12
        ]
        db.query(sql, [values], (err,data)=>{
            if(err){
                return res.json(err);
            }
            // return res.json(data);
        })
    }, 1500);

    setTimeout(function(){
     const query123 = 'SELECT step1.company, step1.companyslogan, step4.yourname, step4.youremail FROM step1 INNER JOIN step4 ON step1.cid = step4.company_id WHERE step1.cid = ' + data12;

      db.query(query123, (err, data) => {
        if (err) {
            return res.status(500).json(err); // Send an error response and return
        }
        yourname = data[0].yourname;
        youremail = data[0].youremail;
        yourcompanyname = data[0].company;
        yourcompanyemail = data[0].companyslogan;
        console.log(data);
        
    });
    

    }, 3000);
console.log(getdata,'hello')
// return getdata;
    setTimeout(function(){
    const data2 = "INSERT INTO combine_result (`company`,`companyslogan`, `yourname`, `youremail`) VALUES (?)";
    const values = [
        yourcompanyname,
        yourcompanyemail,
        yourname,
        youremail
        
    ]
    db.query(data2, [values], (err,data)=>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
}, 4500);

    
})



app.listen(8081, ()=>{
    console.log("listening");
})




