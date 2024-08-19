#!/usr/bin/env python3

'''
    Quickdoc
'''

import typing


def index_range(page: int, page_size: int) -> typing.Tuple[int, int]:
    n = (page - 1) * page_size
    return n, n + page_size
