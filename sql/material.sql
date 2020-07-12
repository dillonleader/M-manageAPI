/*
Navicat MySQL Data Transfer

Source Server         : dl
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : material

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2020-07-12 15:16:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `material_table`
-- ----------------------------
DROP TABLE IF EXISTS `material_table`;
CREATE TABLE `material_table` (
  `prjid` char(50) NOT NULL,
  `planname` char(100) NOT NULL,
  `cmtid` char(50) NOT NULL,
  `leaderNext` char(50) NOT NULL,
  `cdate` char(100) NOT NULL,
  `mname` char(50) NOT NULL,
  `uscLoc` char(100) NOT NULL,
  `mnum` char(50) NOT NULL,
  PRIMARY KEY (`prjid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of material_table
-- ----------------------------
INSERT INTO `material_table` VALUES ('147852', 'T1', '000', '000', '2020', '铀矿石', 'MTN', '1/OCC');
INSERT INTO `material_table` VALUES ('154545', '核二期', '双梦', '维天', '2020-10-01', '铀235', 'MOV', '5896/OCC');
INSERT INTO `material_table` VALUES ('253561894', '核三期', '维京', '维京', '2020-09-09', '铀236', 'MTN', '99542/OCC');
INSERT INTO `material_table` VALUES ('333333', '333333', '333333', '', '', '', '', '');
INSERT INTO `material_table` VALUES ('45468456', '核一期', '双梦', '维天', '2025-09-15', '铀235', 'MNT', '2100/OCC');
INSERT INTO `material_table` VALUES ('4784456456', '核五期', '天问', '维京', '2020-09-10', '铀234', 'MTN', '410/OCC');
INSERT INTO `material_table` VALUES ('564584684', '核一期', 'dillonl', 'Dillon.Leader', '2020-07-11', '铀235', 'MTN', '55200/OCC');
INSERT INTO `material_table` VALUES ('64641515644', '核四期-T02', 'dillonl', 'SMA', '2020-07-12', '铀235-236', 'MOC', '1265465/OCC');
