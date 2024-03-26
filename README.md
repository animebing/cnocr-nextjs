# CNOCR NextJS App

Web application using [cnocr](https://github.com/breezedeus/CnOCR) and [nextjs](https://nextjs.org/)

## Introduction

This project consists of two parts
1. `web`: nextjs web app
2. `backend`: cnocr [ray](https://docs.ray.io/en/latest/) service

## Local Development

### Clone project
```shell
git clone https://github.com/animebing/cnocr-nextjs
cd cnocr-nextjs
```

### Nextjs web app, in `web` directory
1. locate a `.env` file with content below
```shell
CNOCR_URL="http://127.0.0.1:8000/api/ocr"
```
2. install dependencies
```shell
npm install
```
3. start web server
```shell
npm run dev
```

### CNOCR ray service, in `backend` directory
1. install dependencies
```shell
pip install -r requirements.txt
```
2. start ray service
```shell
serve run server:ocr_app
```

## Dependencies
- [NextJS](https://nextjs.org/)
- [CNOCR](https://github.com/breezedeus/CnOCR)
- [Ray](https://docs.ray.io/en/latest/)
- [Fastapi](https://fastapi.tiangolo.com/)
