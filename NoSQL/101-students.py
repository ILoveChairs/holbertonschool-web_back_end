#!/usr/bin/env python3

'''
    Quickdoc
'''

def top_students(mongo_collection):
    ''' quickdoc '''

    students = [doc for doc in mongo_collection.find()]

    # AVERAGE CALCULATIONS
    for student in students:
        student['averageScore'] = sum(
            [topic.get('score') for topic in student.get('topics')]
        )


    # SORTING
    students.sort(key=lambda student: student.get('averageScore', 0))

    return students
