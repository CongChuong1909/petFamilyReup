import mysql from "mysql"
import dotenv from "dotenv"; 
dotenv.config();
export const db = mysql.createConnection({
    host:'localhost',
    // port:3306,
    user:'root',
    password:'',
    database:'dbpetsocial',
    charset: 'utf8mb4'
})

db.connect((err)=>{
   if(err)
    {
        console.log(err.message);
        return;
   }
   console.log("database connected");
})

