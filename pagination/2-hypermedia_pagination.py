#!/usr/bin/env python3

'''
    Quickdoc
'''

import csv
import math
from typing import List, Tuple, Dict, Any


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    ''' quickdoc '''
    n = (page - 1) * page_size
    return n, n + page_size


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        ''' quickdoc '''
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        a, b = index_range(page, page_size)
        data = self.dataset()
        if len(data) < b:
            return []
        selected_data = data[a:b]
        return selected_data

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        ''' quickdoc '''
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        db_len = len(self.dataset())
        total_pages = math.ceil(db_len / page_size)
        return {
            'page_size': page_size,
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': page + 1 if not page >= total_pages else None,
            'prev_page': page - 1 if not page <= 1 else None,
            'total_pages': total_pages
        }
