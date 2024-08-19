#!/usr/bin/env python3

'''
    Quickdoc
'''

from typing import AsyncGenerator
from random import randint
import asyncio


async def async_generator() -> AsyncGenerator[int, None]:
    ''' quickdoc '''

    for _ in range(10):
        await asyncio.sleep(1)
        yield randint(0, 10)
