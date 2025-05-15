from db import cursor

class MenuManager:

    def get_by_name(name : str):
        query = f'''
            select * from menu_items
            where item_name = '{name}';
            '''
        cursor.execute(query)
        if cursor.rowcount == 0:
            return None
        else:
            return cursor.fetchall()

    
    def all_items():
        query = '''
            select * from menu_items;
            '''
        cursor.execute(query)
        return cursor.fetchall()

    

    
    
