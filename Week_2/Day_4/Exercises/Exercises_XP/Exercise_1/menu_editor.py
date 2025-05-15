import psycopg2
from menu_item import MenuItem
from menu_manager import MenuManager
from db import cnx
from db import cursor

def show_user_menu():

    while True:
        try:
            var = str(input('''
            \t\t-Menu-
            \t  * View an Item (V)
            \t  * Add an Item (A)
            \t  * Delete an Item (D)
            \t  * Update an Item (U)
            \t  * Show the Menu (S)\n
            Insert your Choice : ''').lower())

            if var not in ['v', 'a', 'd', 'u', 's']:
                print("\t-Invalid input. Please try again.")
            else:
                break
                
        except:
            print("\t-Invalid input. Please try again.")

    if var == 'v':
        x = str(input("Enter item name : "))
        value = MenuManager.get_by_name(x)
        if value == None:
            print('item not found')
        else:
            print(f'\t--> {value[0][1]} : {value[0][2]}')
        
    elif var == 'a':
        add_item_to_menu()
    elif var == 'd':
        remove_item_from_menu()
    elif var == 'u':
        update_item_from_menu()
    elif var == 's':
        show_restaurant_menu()
         

def add_item_to_menu():
    try:
        name = str(input("Enter item name : "))
        price = int(input("Enter item price : "))
        item = MenuItem(name, price)
        item.save()
        print('item was added successfully')
    except:
        print('item was not added successfully')
        
    

def remove_item_from_menu():
    try:
        name = str(input("Enter item name : "))
        item = MenuItem(name, 0)
        item.delete()
        print('item was deleted successfully')
    except:
        print('item was not deleted successfully')
    


def update_item_from_menu():
    try:
        old_name = str(input("Enter item name : "))
        old_price = int(input("Enter item price : "))
        new_name = str(input("Enter new item name : "))
        new_price = int(input("Enter new item price : "))
        item = MenuItem(new_name, new_price)
        item.update(old_name, old_price)
        print('item was updated successfully')
    except:
        print('item was not updated successfully')
    

def show_restaurant_menu():
    liste = MenuManager.all_items()
    menu = f'\n\t\t-Restaurant Menu-'
    for item in liste:
        menu += f'\n\t* {item[1]} : {item[2]}'
    menu += '\n'

    print (menu)
    

def main():
    
    while True:
        show_user_menu()
        ex = str(input("Do you want to exit ? (y/n) : "))
        if ex == 'y':
            show_restaurant_menu()
            break
    
    cnx.close()



main()





