#!/usr/bin/python3

'''
	Quickdock
'''

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    ''' quickdoc '''

    delay_list = []
    for i in range(n):
        delay_list.append(wait_random(i))
    return delay_list
