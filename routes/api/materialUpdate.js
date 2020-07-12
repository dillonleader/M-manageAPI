const express = require('express');
const router = express.Router();
let db = require("../../config/db.js");
let materialConfig = require("../../config/apisql");
router.get('/', function(req, res, next) {
	let m = {
		'prjid': req.query.prjid,
		'planname': req.query.planname,
		'cmtid': req.query.cmtid,
		'leaderNext': req.query.leaderNext,
		'cdate': req.query.cdate,
		'mname': req.query.mname,
		'uscLoc': req.query.uscLoc,
		'mnum': req.query.mnum
	}
	/*
		更新数据
	*/
	/** update 主逻辑 **/
	function mUpdate() {
		let add = [m.prjid, m.planname, m.cmtid, m.leaderNext, m.cdate, m.mname, m.uscLoc, m.mnum]
		db.query(materialConfig.user.materialInsert, add, (result, fields) => {
			if (fields) {
				console.log(fields)
				return // end
			}
			res.json({code: 1,msg: 'insert is success'})
		})
	}
	
	db.query(materialConfig.user.materialSearch, m.prjid, (result, fields) => {
		if (result.length) {
			res.json({code: -1,msg: 'id存在'})
		} else {
			mUpdate()
		}
	})

});

module.exports = router;
