---
title: Teleport
author: Lucas Gomes
date: 2023-02-06
tags: "apps"
categories: "apps"
description: Teleport basics
---
A single-day dual-track user conference to discuss industry challenges around Access, DevSecOps, and deploying secure systems at scale.

---

## Adding nodes

Add another node with roles

```
tctl nodes add --roles=<node,app,kube,proxy,...> --ttl=1h
```
