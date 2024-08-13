#!/usr/bin/env python3

'''
    Quickdoc
'''

import typing
from typing import Any


# The types of the elements of the input are not known
def safe_first_element(lst: typing.Sequence[Any]) -> typing.Optional[Any]:
    ''' quickdoc '''

    if lst:
        return lst[0]
    else:
        return None
