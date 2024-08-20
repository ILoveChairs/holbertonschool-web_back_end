#!/usr/bin/env python3

"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(
            self, index: int = None, page_size: int = 10
    ) -> Dict[str, Any]:
        ''' quickdoc'''

        data = self.dataset()
        indexed_data = self.indexed_dataset()
        db_len = len(data)

        if index is None:
            index = 0

        assert index >= 0 and index <= db_len

        output_data = []
        cursor = index
        for _ in range(page_size):
            while index < db_len:
                if row := indexed_data.get(cursor):
                    output_data.append(row)
                    break
                else:
                    cursor += 1
            cursor += 1

        return {
            'index': index,
            'data': output_data,
            'page_size': page_size,
            'next_index': cursor,
        }
