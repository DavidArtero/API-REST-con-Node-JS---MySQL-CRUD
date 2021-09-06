const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn) =>{
        if(err){
            return res.status(400).send(err);
        }
        else{
            conn.query('SELECT * from books', (err, rows)=>{
                if(err) return res.status(400).send(err);

                return res.status(200).json(rows);
            });
        }

    })
});

routes.post('/', (req, res)=>{
    req.getConnection((err, conn) =>{
     
       if(err){
            return res.status(400).send(err);
        }
        console.log(req.body)
        
        // else{
        //     conn.query('INSERT INTO books SET ?', [req.body], (err, rows)=>{
               
        //         if(err) return res.status(400).send(err);

        //         return res.status(200).json(rows);
        //     });
        // }

    })
});


module.exports = routes;