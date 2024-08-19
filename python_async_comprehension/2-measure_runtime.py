#!/usr/bin/env python3

'''
    Quickdoc
'''

import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    ''' quickdoc '''

    loop = asyncio.get_event_loop()
    initial_t = time.time()
    results = asyncio.gather(*[
        async_comprehension() for _ in range(4)
    ])
    loop.run_until_complete(results)
    end_t = time.time()

    total_time = end_t - initial_t
    return total_time
