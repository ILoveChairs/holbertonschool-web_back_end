#!/usr/bin/env python3

'''
    Quickdoc
'''

from typing import AsyncGenerator
import random
import asyncio


async def async_generator() -> AsyncGenerator[float, None]:
    ''' quickdoc '''

    for _ in range(10):
        await asyncio.sleep(1)
        num = random.uniform(0.0, 10.0)
        yield num
