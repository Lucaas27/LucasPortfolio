---
title: Rancher
author: Lucas Gomes
date: 2023-02-06
tags: "apps"
description: Rancher basics
---

**Rancher**, the open-source multi-cluster orchestration platform, lets operations teams deploy, manage and secure enterprise **Kubernetes ([[kubernetes]])**.

Project Homepage: [Rancher Homepage](https://www.rancher.com)

---

## Remove Installation

```
kubectl delete validatingwebhookconfiguration rancher.cattle.io
kubectl delete mutatingwebhookconfiguration rancher.cattle.io
```
