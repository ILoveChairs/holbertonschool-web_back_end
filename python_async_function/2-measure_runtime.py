#!/usr/bin/env python3

'''
	Quickdock
'''

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    ''' quickdoc '''

    initial_t = time.time()
    results = asyncio.run(wait_n(n, max_delay))
    end_t = time.time()

    total_time = end_t - initial_t
    return total_time / n
