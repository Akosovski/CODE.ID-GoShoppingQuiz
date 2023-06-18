-- GoShoppingQuiz Queries

create table category (
	category_id integer,
	category_name varchar(100)
)

create table product (
	product_id integer,
	product_name varchar(100),
	category_id integer,
	stock integer,
	price double precision
)

create table users (
	user_id integer,
	username varchar(100)
)

create table orders (
	order_id integer,
	orderNo varchar(100),
	user_id integer,
	totalPrice double precision,
	status varchar(100) -- OPEN / CLOSED / CANCELLED
)

create table orderLineItem (
	orderline_id integer,
	product_id integer,
	quantity integer,
	subTotal double precision,
	order_id integer
)

create table itemProduct (
	cart_id integer,
	product_id integer,
	quantity integer,
	subTotal double precision,
	user_id integer
)

create table cart (
	cart_id integer,
	product_id integer,
	quantity integer,
	subTotal double precision,
	user_id integer
)

