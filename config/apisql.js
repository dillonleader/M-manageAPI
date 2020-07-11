const sqlMap = {
    user: {
        userSearch: `select * from user_insert where username=?`,
        userInsert: `INSERT INTO user_insert (username,password,email,phone) VALUES(?,?,?,?)`,
        materialInsert: `insert into material_table (prjid,planname,cmtid,leaderNext,cdate,mname,uscLoc,mnum) values(?,?,?,?,?,?,?,?)`,
        materialSearch: `select * from material_table where prjid = ?`,
        materialDelete: `delete from material_table where prjid = ?`
    }
}
module.exports = sqlMap