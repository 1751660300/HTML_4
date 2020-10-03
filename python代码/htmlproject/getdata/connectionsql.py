# -*- coding:utf-8 -*-
from config import config
from sqlalchemy import create_engine

engine = create_engine(
    "mysql+pymysql://"+config.root+":"+config.pwd+"@"+config.sqlHost+":3306/"+config.table+"?charset=utf8",
    max_overflow=0,  # 超过连接池大小外最多创建的连接
    pool_size=5,  # 连接池大小
    pool_timeout=30,  # 池中没有线程最多等待的时间，否则报错
    pool_recycle=-1  # 多久之后对线程池中的线程进行一次连接的回收（重置）
)
# 获取数据库连接
con = engine.raw_connection()
print("数据库连接成功", con)
# 获取cursor
cursor = con.cursor()

# # 简单使用（与pymysql中cursor一样使用）
# cursor.execute("select * from users")
# result = cursor.fetchall()
# print(type(result))
# # 关闭连接
# cursor.close()
# con.close()
