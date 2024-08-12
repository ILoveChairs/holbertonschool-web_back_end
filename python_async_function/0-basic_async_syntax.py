#!/usr/bin/python3

'''
    Quickdock
'''

import random
import asyncio


async def wait_random(max_delay=10):
    ''' quickdoc '''

    time = random.uniform(0.0, float(max_delay))
    await asyncio.sleep(time)
    return time
