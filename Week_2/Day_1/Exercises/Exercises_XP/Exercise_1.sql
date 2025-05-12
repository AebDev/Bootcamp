

create database public;
create table items(
item_id serial primary key,
item_name varchar(50) not null,
price decimal(10,2) not null check (price >=0)
);
create table customers(
customer_id serial primary key,
first_name varchar(50),
last_name varchar(50)
);
insert into items (item_id,item_name,price) values 
(1,'Small Desk',100),
(2,'Large desk',300),
(3,'Fan',80);
insert into customers (customer_id,first_name,last_name) values
(1,'Greg','Jones'),
(2,'Sandra','Jones'),
(3,'Scott','Scott'),
(4,'Trevor','Green'),
(5,'Melanie','Johnson');
select * from items;
select * from items where price > 80;
select * from items where price <= 300;

select * from customers where last_name like 'Smith';
select * from customers where last_name like 'Jones';
select * from customers where first_name not like 'Scott';

