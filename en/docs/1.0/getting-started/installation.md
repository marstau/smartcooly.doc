---
layout: docs
title: Installation
description: 
group: getting-started
toc: true
---

You can install smartcooly from **installation package** or **Docker**.

The default username and password are `admin`, please modify them immediately after login!

### From installation package

1. Download the smartcooly installation package on [this page](https://github.com/marstau/smartcooly/releases)
2. Unzip the smartcooly installation package
3. Enter the extracted smartcooly installation directory
4. Run `smartcooly`

Then, smartcooly is running at `http://localhost:9876`.

**Linux & Mac user quick start command**

```shell
wget https://github.com/marstau/smartcooly/releases/download/v[[VERSION]]/smartcooly_[[OS]]_[[ARCH]].tar.gz
tar -xzvf smartcooly_[[OS]]_[[ARCH]].tar.gz
cd smartcooly_[[OS]]_[[ARCH]]
./smartcooly
```

Please replace `[[VERSION]]`, `[[OS]]`, `[[ARCH]]` first.

### From Docker

```shell
docker run --name=smartcooly -p 19876:9876 marstau/smartcooly
```

Then, smartcooly is running at `http://localhost:19876`.
