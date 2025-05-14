select
    *
from
    language;

select
    film.title,
    film.description,
    language.name
from
    film
    INNER JOIN language ON film.language_id = language.language_id;

select
    film.title,
    film.description,
    language.name
from
    film
    right JOIN language ON film.language_id = language.language_id;

create table
    IF NOT EXISTS new_film (id serial primary key, name varchar(50) not null);

INSERT INTO
    new_film (name)
VALUES
    ('Film 1');

INSERT INTO
    new_film (name)
VALUES
    ('Film 2');

INSERT INTO
    new_film (name)
VALUES
    ('Film 3');

INSERT INTO
    new_film (name)
VALUES
    ('Film 4');

INSERT INTO
    new_film (name)
VALUES
    ('Film 5');

drop table customer_review;

CREATE TABLE
    IF NOT EXISTS customer_review (
        review_id serial primary key,
        film_id int not null REFERENCES new_film (id) ON DELETE CASCADE,
        language_id int not null REFERENCES language (language_id),
        title varchar(50) not null,
        score int not null check (score between 1 and 10),
        review_text text not null,
        last_update timestamp not null
    );

INSERT INTO
    customer_review (
        film_id,
        language_id,
        title,
        score,
        review_text,
        last_update
    )
VALUES
    (1, 1, 'Review 1', 5, 'Review text 1', now ());

INSERT INTO
    customer_review (
        film_id,
        language_id,
        title,
        score,
        review_text,
        last_update
    )
VALUES
    (2, 2, 'Review 2', 6, 'Review text 2', now ());

DELETE from film
where
    film_id = 1;