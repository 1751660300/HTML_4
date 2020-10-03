# -*- coding:utf-8 -*-
import requests
import json

res = requests.post("http://127.0.0.1:5000/login", {"name": "123", "pwd": "13213"})
