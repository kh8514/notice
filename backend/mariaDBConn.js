const mariadb = require('mariadb');
const vals = require('./consts.js');

const pool = mariadb.createPool({
    host: vals.DBHost, port:vals.DBPort,
    user: vals.DBUser, password: vals.DBPass,
    connectionLimit: 5
})

async function GetUserNoticeList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE ssab');
        rows = await conn.query('SELECT * FROM tb_bbs');
    } catch(e) {
        throw e;
    } finally {
        if(conn) conn.end();
        return rows;
    }
}

module.exports = {
    getUserNoticeList: GetUserNoticeList
}