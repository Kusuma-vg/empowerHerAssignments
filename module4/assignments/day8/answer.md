# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

`db.json` is a file-based storage system and is not suitable for real-world applications due to the following limitations:

- **Performance:**  
  Every read or write operation requires accessing the entire file, which becomes slow as data grows.

- **Scalability:**  
  It cannot efficiently handle large datasets or increasing numbers of users.

- **Concurrency Issues:**  
  Multiple users accessing the file simultaneously may cause data corruption or overwrites.

- **Reliability:**  
  If the application crashes while writing to the file, the data may become corrupted.

- **Lack of Advanced Features:**  
  File-based storage does not support indexing, complex queries, transactions, backups, or security.

Because of these limitations, `db.json` is suitable only for learning, testing, or small prototypes—not for production systems.

---

## 2. Ideal characteristics of a database system (apart from storage)

A good database system provides more than just data storage. Important characteristics include:

- **Performance:**  
  Fast and optimized data access even with large volumes of data.

- **Concurrency:**  
  Allows multiple users to access and modify data simultaneously without conflicts.

- **Reliability:**  
  Ensures data safety and consistency even during system failures.

- **Data Integrity:**  
  Maintains accuracy and consistency of data using constraints and validations.

- **Scalability:**  
  Can handle increasing data size and user traffic without losing performance.

- **Fault Tolerance:**  
  Supports backup, recovery, and replication to handle hardware or software failures.

---

## 3. Types of databases and their use cases

There are two main types of databases:

### a) Relational Databases (SQL)

- Store data in tables (rows and columns)
- Use fixed schemas
- Follow ACID properties

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use cases:**
- Banking systems
- E-commerce platforms
- Inventory and order management
- Applications requiring strong consistency

---

### b) Non-Relational Databases (NoSQL)

- Store data in documents, key-value pairs, graphs, or column formats
- Flexible or schema-less structure
- Highly scalable

**Examples:** MongoDB, Firebase, Redis, Cassandra

**Use cases:**
- Social media platforms
- Real-time applications
- Big data processing
- Applications with frequently changing data structures

---

## Conclusion

Relational databases are ideal for structured, transactional applications, while NoSQL databases are better suited for scalable and flexible systems. The choice of database depends on the application’s requirements.
