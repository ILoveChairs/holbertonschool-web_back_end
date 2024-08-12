#!/usr/bin/env python3

'''
    Quickdock
'''

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    ''' quickdoc '''

    delay_list = []
    tasks = []

    async def adder(delay):
        ''' quickdoc '''
        delay_list.append(await wait_random(delay))

    for _ in range(n):
        tasks.append(asyncio.create_task(adder(max_delay)))

    for task in tasks:
        await task

    return delay_list
