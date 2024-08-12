#!/usr/bin/env python3

'''
    Quick doc
'''

import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    ''' quickdoc '''

    return lambda x: x * multiplier
