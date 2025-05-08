import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.totalPages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start_idx = self.current_idx * self.page_size
        end_idx = start_idx + self.page_size
        return self.items[start_idx:end_idx]

    def go_to_page(self, page_num):
        page_num -= 1
        if page_num < 0 or page_num >= self.totalPages:
            raise ValueError("Invalid page number")
        self.current_idx = page_num
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.totalPages - 1
        return self

    def next_page(self):
        if self.current_idx < self.totalPages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        return "\n".join(str(item) for item in self.get_visible_items())



alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)