import mysql from "mysql2";


export const db = mysql.createConnection ({

    host:"localhost",
    user:"root",
    password:"Dilan1021",
    database:"blog",
})