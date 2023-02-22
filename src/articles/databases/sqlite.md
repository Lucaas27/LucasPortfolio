---
title: SQLite Cheat-Sheet
author: Lucas Gomes
date: 2023-02-18
tags: "databases"
categories: "databases"
description: SQLite is a relational database contained in a C library.
---
# SQLite Cheat-Sheet

SQLite is a relational database contained in a C library. In contrast to many other databases, SQLite is not a client-server database engine. Rather, it's embedded into an end program.

SQLite generally follows the PostgreSQL ([[postgres]]) syntax but does not enforce type checking.

You can open a SQLite Database with `sqlite3 <filename>` directly.

## Commands

`.help` Shows all commands `.databases` Show all existing databases `.quit` Exists `.tables` Shows all tables `.backup` Backups current database
