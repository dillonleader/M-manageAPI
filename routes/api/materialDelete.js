const express = require('express');
const router = express.Router();
let db = require("../../config/db.js");
let materialConfig = require("../../config/apisql");
router.get('/:prjid', function(req, res, next) {
	let prjid = req.params.prjid
	/*
		删除数据
	*/
   function mDelete(){
	   db.query(materialConfig.user.materialDelete, prjid, (result, fields) => {
	   	if(result){
	   		res.json({code:1,msg:'delete success'})
	   	}
	   })
   }
   db.query(materialConfig.user.materialSearch, prjid, (result, fields) => {
   	if (result.length) {
		mDelete()
   	} else {
   		res.json({code: -1,msg:'delete failed'})
   	}
   })
	

});

module.exports = router;
