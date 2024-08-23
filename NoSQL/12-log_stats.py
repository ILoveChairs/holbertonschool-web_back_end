#!/usr/bin/env python3

'''
    Quickdoc
'''

from pymongo import MongoClient


# DB OBJECTS
client: MongoClient = MongoClient('mongodb://127.0.0.1:27017')
db = client.logs
collection = db.nginx

# DB CALLS
n_of_logs = collection.count_documents({})

n_of_GET = collection.count_documents({"method": "GET"})
n_of_POST = collection.count_documents({"method": "POST"})
n_of_PUT = collection.count_documents({"method": "PUT"})
n_of_PATCH = collection.count_documents({"method": "PATCH"})
n_of_DELETE = collection.count_documents({"method": "DELETE"})

n_of_status_checks = collection.count_documents(
    {"method": "DELETE", "path": "/status"}
)

# PRINT
print(f"{n_of_logs} logs")
print("Methods:")
print(f"\tmethod GET: {n_of_GET}")
print(f"\tmethod POST: {n_of_POST}")
print(f"\tmethod PUT: {n_of_PUT}")
print(f"\tmethod PATCH: {n_of_PATCH}")
print(f"\tmethod DELETE: {n_of_DELETE}")
print(f"{n_of_status_checks} status check")
