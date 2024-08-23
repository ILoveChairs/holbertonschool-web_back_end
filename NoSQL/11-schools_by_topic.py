#!/usr/bin/env python3

'''
    Quickdoc
'''


def schools_by_topic(mongo_collection, topic):
    ''' quickdoc '''

    return [doc for doc in mongo_collection.find()
            if doc.get('topic') == topic]
