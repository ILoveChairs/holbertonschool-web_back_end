#!/usr/bin/env python3

'''
    Quickdoc
'''


def insert_school(mongo_collection, **kwargs):
    ''' quickdoc '''

    return mongo_collection.insert_one(kwargs).inserted_id
