UPDATE film set language_id = 6 where language_id = 1;
UPDATE film set language_id = 2 where language_id = 1;
UPDATE film set language_id = 3 where language_id = 1;
UPDATE film set language_id = 4 where language_id = 1;
UPDATE film set language_id = 5 where language_id = 1;

*/address_id
every customer need a valid address_id*/

drop table customer_review;
--easy step !?

select count(*) from rental where return_date is not null;

select * from rental 
inner JOIN inventory on rental.inventory_id = inventory.inventory_id
INNER JOIN film on inventory.film_id = film.film_id
where return_date is not null ORDER BY replacement_cost desc LIMIT 30;

select * from film 
INNER JOIN film_actor on film.film_id = film_actor.film_id
INNER JOIN actor on film_actor.actor_id = actor.actor_id
where description ilike '%sumo wrestler%' and concat(first_name,' ',last_name) = 'Penelope Monroe';

select * from film where length < 60 and rating = 'R';

select * from film
inner JOIN inventory on film.film_id = inventory.film_id
inner JOIN rental on inventory.inventory_id = rental.inventory_id
where  replacement_cost > 4 and rental_date between '2005-07-28' and '2005-08-01';

select * from film where title ilike '%boat%' or description ilike '%boat%' and replacement_cost in (select max(replacement_cost) from film);
