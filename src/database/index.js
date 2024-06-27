const mysql = require("mysql2/promise");

async function executarSQL(sql){
    const conexao = await mysql.createConnection({
        user: 'refo9178_fs31_user',
        password: 'FS31@123456',
        host: 'reforcodev.com',
        database: 'refo9178_fs31'
    });

    const [result] = conexao.query(sql);
    conexao.end();

    return result;
}

module.exports = {
    executarSQL
}