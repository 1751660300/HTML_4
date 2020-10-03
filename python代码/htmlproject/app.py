from flask import Flask, jsonify, request, Request
from getdata import cursor
from objects import *
from flask_cors import *  # 解决跨域问题

app = Flask(__name__)
# app.config.DEBUG = True
# app.config.from_object("config.config")
# 跨域问题解决方法
CORS(app, supports_credentials=True)
# 第一遍获取
Users = []
Teachers = []
Classes = []
ClassDetail = []
SelectClass = []
StudyHistory = []


@app.route('/')
def hello_world():
    return '阿松大'


@app.route('/login', methods=["post", "get"])
def checkLogin():
    # data = request.form.get("data")
    # data = request.form.
    d = request.form.values()
    for i in d:
        print(i)
    # data = Request.form.get("data")
    # print(data)
    return jsonify({"type": True})


# 获取所有用户列表
@app.route('/users', methods=["get", "post"])
def getUsers():
    data = []
    if 0 == len(Users):
        sql = "select * from users"
        cursor.execute(sql)
        result = cursor.fetchall()
        for i in result:
            user = User(i[0], i[1], i[2], i[3], i[4])
            Users.append(user)
            data.append(user.getDict())
    else:
        for i in Users:
            data.append(i.getDict())
    return jsonify(data)


# 获取所有教师列表
@app.route('/teachers', methods=["get", "post"])
def getTeachers():
    data = []
    if len(Teachers) == 0:
        sql = "select * from teachers"
        cursor.execute(sql)
        result = cursor.fetchall()
        for i in result:
            t = teacher(i[0], i[1], i[2])
            Teachers.append(t)
            data.append(t.getDict())
    else:
        for i in Teachers:
            data.append(i.getDict())
    return jsonify(data)


# 获取所有课程列表
@app.route('/classes', methods=["get", "post"])
def getClass():
    data = []
    if len(Classes) == 0:
        sql = "select * from class"
        cursor.execute(sql)
        result = cursor.fetchall()
        for i in result:
            Classname = className(i[0], i[1], i[2], i[3], i[4], i[5])
            Classes.append(Classname)
            data.append(Classname.getDict())
    else:
        for i in Classes:
            data.append(i.getDict())
    return jsonify(data)


@app.route('/classdetail', methods=["get", "post"])
def getCD():
    data = []
    if len(ClassDetail) == 0:
        sql = "select * from classdetail"
        cursor.execute(sql)
        result = cursor.fetchall()
        for i in result:
            cd = classDetail(i[0], i[1], i[2], i[3])
            ClassDetail.append(cd)
            data.append(cd.getDict())
    else:
        for i in ClassDetail:
            data.append(i.getDict())
    return jsonify(data)


@app.route('/selectclass', methods=["get", "post"])
def getSC():
    data = []
    if len(SelectClass) == 0:
        sql = "select * from selectclass"
        cursor.execute(sql)
        result = cursor.fetchall()
        for i in result:
            sc = selectClass(i[0], i[1], i[2], i[3])
            SelectClass.append(sc)
            data.append(sc.getDict())
    else:
        for i in SelectClass:
            data.append(i.getDict())
    return jsonify(data)


@app.route('/studyhistory', methods=["get", "post"])
def getSH():
    data = []
    if len(StudyHistory) == 0:
        sql = "select * from studyhistory"
        cursor.execute(sql)
        result = cursor.fetchall()
        for i in result:
            sh = studyHistory(i[0], i[1], i[2], i[3], i[4], i[5])
            StudyHistory.append(sh)
            data.append(sh.getDict())
    else:
        for i in StudyHistory:
            data.append(i.getDict())
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
