
create table if not exists customer (
    id serial primary key,
    first_name varchar(50),
    last_name varchar(50) not null
);

create table if not exists customer_profile (
    id serial primary key,
    isLoggedIn boolean default false,
    customer_id integer references customer(id)
);

insert into customer (first_name, last_name) values
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

insert into customer_profile (isLoggedIn, customer_id) values
(true, 1),
(false, 2);

select first_name from customer
inner join customer_profile on customer.id = customer_profile.customer_id
where isLoggedIn = true;

select first_name,isLoggedIn from customer
left join customer_profile on customer.id = customer_profile.customer_id;

select count(*) as "customers not logged in" from customer
inner join customer_profile on customer.id = customer_profile.customer_id
where isloggedin = false;

create table if not exists book (
    id serial primary key,
    title varchar(50) not null,
    author varchar(50) not null
);

insert into book (title, author) values
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


create table if not exists student (
    id serial primary key,
    name varchar (100) not null unique,
    age integer check (age <= 15)
);

insert into student (name, age) values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

SELECT * FROM student

create table if not exists library (
    book_fk_id integer references book(id) on delete cascade on update cascade,
    student_fk_id integer references student(id) on delete cascade on update cascade,
    borrowed_date date,
    primary key (book_fk_id, student_fk_id)
);

insert into library (book_fk_id, student_fk_id, borrowed_date) values
(1, 1, '2022-02-15'),
(3, 4, '2021-03-03'),
(1, 2, '2021-05-23'),
(2, 4, '2021-08-12');

select * from library;

select name, title from student
inner join library on student.id = library.student_fk_id
inner join book on library.book_fk_id = book.id;

select avg(age) as "average age" from student
inner join library on student.id = library.student_fk_id
INNER JOIN book ON library.book_fk_id = book.id
where title = 'Alice In Wonderland';

delete from student where id = 4;
--2 rows deleted from library table


