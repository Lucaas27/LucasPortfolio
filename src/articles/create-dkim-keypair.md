---
title: Generate a DKIM Keypair
author: Lucas Gomes
date: 2023-02-21
tags: "networking"
categories: "networking"
description: networking
---
We use the tool OpenSSL ([openssl](tools/openssl.md)]) to generate a DKIM private and public keypair.

`openssl genrsa -out dkim_private.pem 2048`

`openssl rsa -in dkim_private.pem -pubout -outform der 2>/dev/null | openssl base64 -A`
