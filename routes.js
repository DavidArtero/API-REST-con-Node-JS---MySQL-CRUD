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
                
        else{
            conn.query('INSERT INTO books SET ?', [req.body], (err, rows)=>{
               
                if(err) return res.status(400).send(err);

                return res.status(200).send("book inserted correctly");
            });
        }
    })
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn) =>{
     
       if(err){
            return res.status(400).send(err);
        }
                
        else{
            conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows)=>{
               
                if(err) return res.status(400).send(err);

                return res.status(200).send("book removed succesfully");
            });
        }
    })
});

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn) =>{
     
       if(err){
            return res.status(400).send(err);
        }
                
        else{
            conn.query('UPDATE books SET ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
               
                if(err) return res.status(400).send(err);

                return res.status(200).send("book updated succesfully");
            });
        }
    })
});


module.exports = routes;