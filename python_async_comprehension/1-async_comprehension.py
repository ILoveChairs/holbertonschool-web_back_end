#!/usr/bin/env python3

'''
    Quickdoc
'''

import typing

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    ''' quickdoc '''

    print('done')
    return [x async for x in async_generator()]
