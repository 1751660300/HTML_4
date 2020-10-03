# -*- coding:utf-8 -*-
# 用户对象
class User(object):
    def __init__(self, uid, uname, upw, usex, uheadimg):
        self.uid = uid
        self.uname = uname
        self.upw = upw
        self.usex = usex
        self.uheadimg = uheadimg

    def getDict(self):
        return {"uid": self.uid, "uname": self.uname, "upw": self.upw, "usex": self.usex, "uheadimg": self.uheadimg}


# 教师对象
class teacher(object):
    def __init__(self, tid, tname, theadimg):
        self.tid = tid
        self.tname = tname
        self.theadimg = theadimg

    def getDict(self):
        return {"tid": self.tid, "tname": self.tname, "theadimg": self.theadimg}


# 课程对像
class className(object):
    def __init__(self, cid, ctype, cname, cdiscrible, cimg, tid):
        self.cid = cid
        self.ctype = ctype
        self.cname = cname
        self.cdiscrible = cdiscrible
        self.cimg = cimg
        self.tid = tid

    def getDict(self):
        return {"cid": self.cid, "cname": self.cname, "ctype": self.ctype,
                "cdiscrible": self.cdiscrible, "cimg": self.cimg, "tid": self.tid}


# 课程详细
class classDetail(object):
    def __init__(self, cdid, cid, cdname, cdresource):
        self.cdid = cdid
        self.cid = cid
        self.cdname = cdname
        self.cdresource = cdresource

    def getDict(self):
        return {"cdid": self.cdid, "cid": self.cid, "cdname": self.cdname,
                "cdresource": self.cdresource}


# 选课对象
class selectClass(object):
    def __init__(self, sid, uid, stime, cid):
        self.sid = sid
        self.uid = uid
        self.stime = stime
        self.cid = cid

    def getDict(self):
        return {"sid": self.sid, "uid": self.uid, "stime": self.stime,
                "cid": self.cid}


class studyHistory(object):
    def __init__(self, shid, cid, cdid, stime, etime, uid):
        self.shid = shid
        self.cid = cid
        self.cdid = cdid
        self.stime = stime
        self.etime = etime
        self.uid = uid

    def getDict(self):
        return {"shid": self.shid, "cid": self.cid, "cdid": self.cdid, "stime": self.stime,
                "uid": self.uid, "etime": self.etime}