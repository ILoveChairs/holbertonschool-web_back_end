#!/usr/bin/env python3

'''
    Quickdoc
'''

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> list[float]:
    ''' quickdoc '''

    return [x async for x in async_generator()]
