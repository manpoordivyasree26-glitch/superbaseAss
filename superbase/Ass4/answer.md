**SCHEMA DESIGNS**

schema design is the process of planning how data is organized in a database,inculding tables,columns,and rules before storing any data.

**1.WHAT SCHEMA DESIGN IS AND WHAT A DATABASE SCHEMA REPRESENTS?**

schema design is the process of deciding how data will be organised in a database
A database schema represents the complete sturcture of the database,including tables,columns,datatypes and rules.It acta like a plan that shows how data will be stored and connected.
 

 **2.WHAT SCHEMA DESIGN IS REQURIED BEFORE WRITING BACKEND CODE**

 schema design is needed before the backend coding because backend code depends on the database structure.If the schema is clear,developers know how to store and fetch the data correctly.without schema design,frequent changes in the database can break backend logic.


 **3. HOW POOR SCHEMA DESIGN IMPACTS DATA CONSISTENCY,MAINTENANCE,AND SCALABILITY?**

 poor schema design can cause duplicate and incorrect data,
 which affects data consistency. It also makes the system hard to maintain because queries become complex. When data grows, a bad schema slows down performance and makes scaling difficult.


 **4.WHAT VALIDATIONS ARE IN SCHEMA DESIGN AND WHY DATABASE ENFORCE VALIDATIONS (FOR EXAMPLE: NOTNULL, UNIQUE,DEFAULT,PRIMARY KEY)**

validations are rules applied to database colums to ensure correct data is stored.
Database enforce validations to protect data integrity.
EXAMPLES:
NOT NULL:Ensures a value is always present
UNIQUE:It avoids the duplicate values.
DEFAULT: Assigns a value Automatically.
PRIMARY KEY: uniquely identifies each record

**5.THE DIFFERENCE BETWEEN A DATABASE SCHEMA AND A DATABASE TABLE**

A database schema is the overall design of the database. A database table is a single structure inside the schema that stores actual data in rows and column

**6.WHY A TABLE SHOULD REPRESENT ONLY ONE ENTITY**

A table should represent only one entity to keep data organized and avoid duplication. This makes data easy to update and understand.

**WHY REDUNDANT OR DERVIED DATA SHOULD BE AVOIDED IN TABLE DESIGN**

Redundant or derived data should be avoided because it increases storage and can lead to incorrect data. For example, storing age instead of calculating it can cause wrong values later.


**8.THE IMPORTANCE OF CHOOSING CORRECT DATA TYPES WHILE DESGINING TABLES**

Choosing correct data types helps store data efficiently and prevents invalid values. It also improves query performance and data accuracy.