#!/usr/bin/env python3

'''
    Quickdoc
'''

def top_students(mongo_collection):
    ''' quickdoc '''

    return [doc for doc in mongo_collection.find()]
