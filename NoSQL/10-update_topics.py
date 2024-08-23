#!/usr/bin/env python3

'''
    Quickdoc
'''


def update_topics(mongo_collection, name, topics):
    ''' quickdoc '''

    mongo_collection.update_one({"name": name}, {"$set": {"topics": topics}})
