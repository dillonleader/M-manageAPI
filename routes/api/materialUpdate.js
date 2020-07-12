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
		let add = [m.planname, m.cmtid, m.leaderNext, m.cdate, m.mname, m.uscLoc, m.mnum, m.prjid]
		db.query(materialConfig.user.materialUpdate, add, (result, fields) => {
			if (fields) {
				console.log(fields)
				return // end
            }
			res.json({code: 1,msg: 'update success'})
		})
	}
	
	db.query(materialConfig.user.materialSearch, m.prjid, (result, fields) => {
		if (result.length) {
            console.log(result)
			mUpdate()
		} else {
			res.json({code: -1,msg: 'update failed'})
		}
	})

});

module.exports = router;
