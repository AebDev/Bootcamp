create table product_orders (
    order_id serial primary key
);

create table items (
    item_id serial primary key,
    order_id integer references product_orders(order_id),
    price numeric not null
);

create or replace function calculate_order_total(order_id integer)
returns numeric as $$
declare
    total_price numeric := 0;
begin
    select coalesce(sum(price), 0)
    into total_price
    from items
    where items.order_id = order_id;

    return total_price;
end;
$$ language plpgsql;

insert into product_orders default values returning order_id; 

insert into items (order_id, price) values
(1, 10.50),
(1, 20.00),
(1, 5.25);

select calculate_order_total(1);