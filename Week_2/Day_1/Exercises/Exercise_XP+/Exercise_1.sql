create database bootcamp;
create table students (
id serial primary key,
last_name varchar(50) not null,
first_name varchar(50) not null,
birth_date date not null
);
insert into students (first_name,last_name,birth_date) values
('Marc','Benichou',TO_DATE('02/11/1998', 'DD/MM/YYYY')),
('Yoan','Cohen',TO_DATE('03/12/2010', 'DD/MM/YYYY')),
('Lea','Benichou',TO_DATE('27/07/1987', 'DD/MM/YYYY')),
('Amelia','Dux',TO_DATE('07/04/1996', 'DD/MM/YYYY')),
('David','Grez',TO_DATE('14/06/2003', 'DD/MM/YYYY')),
('Omer','Simpson',TO_DATE('03/10/1980', 'DD/MM/YYYY'));

insert into students (first_name,last_name,birth_date) values
('Mouhcine','Ait El Bachir','1993-01-23');

select * from students;
select first_name,last_name from students;
select first_name,last_name from students where id = 2;
select first_name,last_name from students where last_name = 'Benichou' and first_name = 'Marc';
select first_name,last_name from students where last_name = 'Benichou' or first_name = 'Marc';
select first_name,last_name from students where first_name like '%a%';
select first_name,last_name from students where first_name Ilike 'a%';
select first_name,last_name from students where first_name like '%a';
select first_name,last_name from students where first_name like '%a_';
select first_name,last_name from students where id = 1 or id = 3;
select * from students where birth_date >= TO_DATE('1/01/2000', 'DD/MM/YYYY');





















