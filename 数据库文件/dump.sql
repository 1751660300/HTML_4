-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: html
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `class` (
  `cid` varchar(4) NOT NULL,
  `ctype` varchar(16) DEFAULT NULL,
  `cname` varchar(16) DEFAULT NULL,
  `cdiscrible` text,
  `cimg` text,
  `tid` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `tid` (`tid`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`tid`) REFERENCES `teachers` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES ('C01','区块链','Go语言','Go 是一个开源的编程语言，它能让构造简单、可靠且高效的软件变得容易。','//img.mukewang.com/szimg/5a7127370001a8fa05400300-360-202.jpg','T01'),('C02','区块链','GoWeb','无','//img.mukewang.com/szimg/5f1eafb709e18bf912000676-360-202.jpg','T01'),('C03','区块链','区块链以太坊','无','//img1.mukewang.com/5ae3e5b80001818c06000338-240-135.jpg','T02'),('C04','区块链','以太坊项目实战','无','//img.mukewang.com/szimg/5b73d7f60001dc1e05400300-360-202.jpg','T02'),('C05','Java','基础阶段','无','//img1.sycdn.imooc.com/szimg/58f57d200001461105400300-360-202.jpg','T03'),('C06','Java','JavaWEB','无','//img1.sycdn.imooc.com/szimg/5b88fed900016f0b06000338-360-202.jpg','T03'),('C07','Java','JavaEE框架','无','//img1.sycdn.imooc.com/szimg/5f4718dd09a99fd112000676-360-202.jpg','T04'),('C08','Java','JavaEE高级','无','//img.mukewang.com/szimg/5c18d2d8000141c506000338-360-202.jpg','T04'),('C09','大数据','基础阶段','无','//img.mukewang.com/szimg/5d1eb552082e176e06000338-360-202.jpg','T05'),('C10','大数据','Java高级','无','//img.mukewang.com/szimg/5e40f9d408e7c86b06000338-360-202.jpg','T05'),('C11','大数据','大数据核心框架','无','//img.mukewang.com/szimg/5e6f2f240847796506000338-360-202.jpg','T05'),('C12','Linux运维','Linux基础知识','无','//dn-simplecloud.shiyanlou.com/ncn1.jpg','T06'),('C13','Linux运维','Shell编程','无','//i03piccdn.sogoucdn.com/b283faaae6623c43','T06'),('C14','Linux运维','Linux系统管理','无','//pic.baike.soso.com/ugc/baikepic/45093/cut-20140630170340-1814940637.jpg/0','T06'),('C15','Linux运维','Linux服务管理','无','//img-bss.csdn.net/201801261338399995.jpg','T06'),('C16','Linux运维','MySQL数据库管理','无','//pic.baike.soso.com/ugc/baikepic2/2361/20200621004035-1357001876_jpeg_472_376_12767.jpg/300','T07'),('C17','Linux运维','LInux集群','无','//img-bss.csdn.net/201958153224747_38954.jpg','T07'),('C18','Linux','Linux虚拟化','无','//img13.360buyimg.com/n1/jfs/t976/5/1213774564/155058/2ea4d05e/558d1e94N364ebd16.jpg','T07');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classdetail`
--

DROP TABLE IF EXISTS `classdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `classdetail` (
  `cdid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(4) DEFAULT NULL,
  `cdname` varchar(40) DEFAULT NULL,
  `cdresource` text,
  PRIMARY KEY (`cdid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classdetail`
--

LOCK TABLES `classdetail` WRITE;
/*!40000 ALTER TABLE `classdetail` DISABLE KEYS */;
INSERT INTO `classdetail` VALUES (1,'C01','Go语言','http://www.atguigu.com/download_detail.shtml?v=232'),(2,'C02','GoWeb','http://www.atguigu.com/download_detail.shtml?v=238'),(3,'C03','区块链以太坊','http://www.atguigu.com/download_detail.shtml?v=247'),(4,'C04','以太坊项目实践','http://www.atguigu.com/download_detail.shtml?v=258'),(5,'C05','Java基础训练','http://www.atguigu.com/download_detail.shtml?v=129'),(6,'C06','JavaWEB','http://www.atguigu.com/download_detail.shtml?v=280'),(7,'C07','JavaEE','http://www.atguigu.com/download_detail.shtml?v=17'),(8,'C08','JavaEE框架','http://www.atguigu.com/download_detail.shtml?v=37'),(9,'C09','大数据基础阶段','http://www.atguigu.com/download_detail.shtml?v=129'),(10,'C10','Java高级','http://www.atguigu.com/download_detail.shtml?v=45'),(11,'C11','大数据核心框架','http://www.atguigu.com/download_detail.shtml?v=50'),(12,'C12','‘Linux基础知识','http://www.atguigu.com/download_detail.shtml?v=123'),(13,'C13','Shell编程','http://www.atguigu.com/download_detail.shtml?v=123'),(14,'C14','Linux系统管理','http://www.atguigu.com/download_detail.shtml?v=123'),(15,'C15','Linux服务管理','http://www.atguigu.com/download_detail.shtml?v=177'),(16,'C16','MySQL数据库管理','http://www.atguigu.com/download_detail.shtml?v=177'),(17,'C17','Linux集群','http://www.atguigu.com/download_detail.shtml?v=145'),(18,'C18','Linux虚拟化','http://www.atguigu.com/download_detail.shtml?v=155'),(19,'',NULL,NULL);
/*!40000 ALTER TABLE `classdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selectclass`
--

DROP TABLE IF EXISTS `selectclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `selectclass` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(4) DEFAULT NULL,
  `stime` varchar(12) DEFAULT NULL,
  `cid` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`sid`),
  KEY `cid_idx` (`cid`),
  CONSTRAINT `cid` FOREIGN KEY (`cid`) REFERENCES `class` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selectclass`
--

LOCK TABLES `selectclass` WRITE;
/*!40000 ALTER TABLE `selectclass` DISABLE KEYS */;
INSERT INTO `selectclass` VALUES (1,'001','2020.10.1','C01'),(2,'001','2020.101','C02'),(3,'001','2020.10.1','C03'),(4,'001','2020.10.1','C04'),(5,'002','2020.10.2','C05'),(6,'002','2020.10.2','C06'),(7,'002','2020.10.2','C07'),(8,'002','2020.10.2','C08'),(9,'003','2020.10.3','C09'),(10,'003','2020.10.3','C10'),(11,'003','2020.10.3','C11'),(12,'004','2020.10.4','C12'),(13,'004','2020.10.4','C13'),(14,'004','2020.10.4','C14'),(15,'004','2020.10.4','C15'),(16,'004','2020.10.4','C16'),(17,'004','2020.10.4','C17'),(18,'004','2020.10.4','C18');
/*!40000 ALTER TABLE `selectclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studyhistory`
--

DROP TABLE IF EXISTS `studyhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `studyhistory` (
  `shid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(4) DEFAULT NULL,
  `cdid` int(11) DEFAULT NULL,
  `stime` varchar(16) DEFAULT NULL,
  `etime` varchar(16) DEFAULT NULL,
  `uid` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`shid`),
  KEY `cid_idx` (`cid`),
  KEY `cdid_idx` (`cdid`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studyhistory`
--

LOCK TABLES `studyhistory` WRITE;
/*!40000 ALTER TABLE `studyhistory` DISABLE KEYS */;
INSERT INTO `studyhistory` VALUES (1,'C01',1,'2020.10.1','2020.11.1','001'),(2,'C02',1,'2020.10.1','2020.12.1','001'),(3,'C03',3,'2020.10.1','2021.1.1','001'),(4,'C04',4,'2020.10.1','2021.2.1','001'),(5,'C05',5,'2020.10.2','2020.11.2','002'),(6,'C06',6,'2020.10.2','2020.12.2','002'),(7,'C07',7,'2020.10.2','2021.1.2','002'),(8,'C08',8,'2020.10.2','2021.2.2','002'),(9,'C09',9,'2020.10.3','2020.11.3','003'),(10,'C10',10,'2020.10.3','2020.12.3','003'),(11,'C11',11,'2020.10.3','2021.1.3','003'),(12,'C12',12,'2020.10.4','2020.11.4','004'),(13,'C13',13,'2020.10.4','2020.12.4','004'),(14,'C14',14,'2020.10.4','2021.1.4','004'),(15,'C15',15,'2020.10.4','2021.2.4','004'),(16,'C16',16,'2020.10.4','2021.3.4','004'),(17,'C17',17,'2020.10.4','2021.4.4','004'),(18,'C18',18,'2020.10.4','2021.5.4','004');
/*!40000 ALTER TABLE `studyhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `teachers` (
  `tid` varchar(4) NOT NULL,
  `tname` varchar(4) DEFAULT NULL,
  `theadimg` text,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES ('T01','小刘','./img/teacher-1.jpg'),('T02','小张','./img/teacher-2.jpg'),('T03','小方','./img/teacher-3.jpg'),('T04','小钱','./img/teacher-4.jpg'),('T05','小易','./img/teacher-5.jpg'),('T06','小王','./img/teacher-6.jpg'),('T07','小陈','http://p3.pstatp.com/large/7220008f8fd7f9466eb');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `uid` varchar(8) NOT NULL,
  `uname` varchar(4) DEFAULT NULL,
  `upw` varchar(8) NOT NULL,
  `usex` tinyint(1) DEFAULT '0',
  `uheadimg` text,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('001','张三','123456',0,'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601616870285&di=ff31dc3a8dac28d6693afa1b39707c24&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F19%2F20190119231949_buetu.jpg'),('002','李四','123456',1,'http://5b0988e595225.cdn.sohucs.com/images/20190924/7816ac3cb8f54d9492d1d1fb3697201c.jpeg'),('003','王五','123456',0,'http://5b0988e595225.cdn.sohucs.com/images/20200221/73a9598a2a9c457ead5fcc009578995a.jpeg'),('004','赵六','123456',1,'https://c-ssl.duitang.com/uploads/item/202004/05/20200405092747_FvVAN.thumb.1000_0.jpeg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-03 18:43:53
