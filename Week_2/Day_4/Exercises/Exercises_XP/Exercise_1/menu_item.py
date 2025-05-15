from db import cnx
from db import cursor

class MenuItem:
    def __init__(self, name="", price=0):
        self.name = name
        self.price = price
    
    def save(self):
        query = f'''
            INSERT INTO menu_items (item_name, item_price)
            VALUES ('{self.name}', {self.price});
        '''
        cursor.execute(query)
        cnx.commit()

    def update(self, old_name : str, old_price : int):
        query = f'''
            update menu_items set item_name = '{self.name}', item_price = {self.price}
            where item_name = '{old_name}' and item_price = {old_price};
        '''
        cursor.execute(query)
        cnx.commit()
    
    def delete(self):
        query = f'''
            delete from menu_items
            where item_name = '{self.name}';
        '''
        cursor.execute(query)
        cnx.commit()
        