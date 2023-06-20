-- GoShoppingQuiz Queries

create table category (
	category_id integer, --
	category_name varchar(100)
);

alter table category add constraint pk_category_id primary key(category_id);

create table product (
	product_id integer, --
	product_name varchar(100),
	category_id integer, --
	stock integer,
	price double precision
);

alter table product add constraint pk_product_id primary key(product_id);
alter table product add constraint fk_category_id foreign key (category_id) references category(category_id) ON DELETE CASCADE ON UPDATE CASCADE;

create table users (
	user_id integer, --
	username varchar(100)
);

alter table users add constraint pk_user_id primary key(user_id);

create table orders (
	order_id integer, --
	orderNo varchar(100),
	user_id integer, --
	totalPrice double precision,
	status varchar(100) -- OPEN / CLOSED / CANCELLED
);

alter table orders add constraint pk_order_id primary key(order_id);
alter table orders add constraint fk_user_id foreign key (user_id) references users(user_id) ON DELETE CASCADE ON UPDATE CASCADE;

create table orderLineItem (
	orderline_id integer,
	product_id integer,
	quantity integer,
	subTotal double precision,
	order_id integer
);

alter table orderLineItem add constraint fk_order_id foreign key (order_id) references orders(order_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table orderLineItem add constraint fk_product_id foreign key (product_id) references product(product_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table orderLineItem add constraint pk_orderline_id primary key(orderline_id);

create table cart (
	cart_id integer,
	product_id integer,
	quantity integer,
	subTotal double precision,
	user_id integer
);

alter table cart add constraint pk_cart_id primary key(cart_id);
alter table cart add constraint fk_user_id foreign key (user_id) references users(user_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table cart add constraint fk_product_id foreign key (product_id) references product(product_id) ON DELETE CASCADE ON UPDATE CASCADE;

create table itemProduct (
	cart_id integer,
	product_id integer,
	quantity integer,
	subTotal double precision,
	user_id integer
);

alter table itemProduct add constraint fk_cart_id foreign key (cart_id) references cart(cart_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table itemProduct add constraint fk_user_id foreign key (user_id) references users(user_id) ON DELETE CASCADE ON UPDATE CASCADE;

select * from category;