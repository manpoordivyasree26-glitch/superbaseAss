1. Definition of Database Relationship

A database relationship defines how two or more tables in a database are connected to each other using primary keys and foreign keys.
Relationships help maintain data integrity, reduce data duplication, and allow structured access to related data.

![Database realtionship](https://th.bing.com/th/id/OIP.BCXDGxv_zcvmGOXlKCFvBAHaDt?w=349&h=174&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3)

In simple terms, a database relationship shows how data in one table is related to data in another table.

2. Types of Database Relationships

There are three main types of database relationships:

One-to-One (1:1)

One-to-Many (1:N)

Many-to-Many (M:N)

Each type is explained below with e-commerce examples.

3. One-to-One (1:1) Relationship
Explanation

![one to one](https://media.geeksforgeeks.org/wp-content/uploads/20240417202605/1-t-m-.png)

In a one-to-one relationship, one record in Table A is related to only one record in Table B, and vice versa.

E-commerce Example

User ↔ User Profile

Each user has one profile

Each profile belongs to one user

Tables:

users

user_profiles

Example relationship:

One user → One profile

Use case in e-commerce:

users table stores login information

user_profiles table stores address, phone number, and personal details

4. One-to-Many (1:N) Relationship
Explanation

![one to many](https://media.istockphoto.com/id/2186868795/vector/er-diagram-of-one-to-many-one-to-one-many-to-many-relationship-is-a-fundamental-concept-in.jpg?s=170667a&w=0&k=20&c=j9vC9ilopbki1LC9fQh5weheoYErYATbAvED3LGwSFo=)

In a one-to-many relationship, one record in Table A can be related to multiple records in Table B, but each record in Table B relates to only one record in Table A.

E-commerce Example

Customer ↔ Orders

One customer can place many orders

Each order belongs to one customer

Tables:

customers

orders

Example relationship:

One customer → Many orders

Use case in e-commerce:

A customer may purchase products multiple times

Orders table contains a customer_id as a foreign key

5. Many-to-Many (M:N) Relationship
Explanation

![many to many](https://tse4.mm.bing.net/th/id/OIP.TIL-0XRNbPzwcnQy5RHw3gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3)

In a many-to-many relationship, multiple records in Table A are related to multiple records in Table B.
This relationship is implemented using a junction (bridge) table.

E-commerce Example

Products ↔ Orders

One order can contain many products

One product can appear in many orders

Tables:

products

orders

order_items (junction table)

Example relationship:

Many products ↔ Many orders

Use case in e-commerce:

order_items table stores:

order_id

product_id

quantity

price