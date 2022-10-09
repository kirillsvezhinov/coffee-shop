## Coffe Shop

### Версии

npm - v7.24.0
node - v16.10.0

### Стэк проекта
backend: node.js, express.js, postgres, sequelize

frontend: react.js, redux toolkit, typescript

### Старт проекта с нуля

1. Установка всех зависимостей, а также языка make
```
npm i
cd backend && npm i
cd frontend && npm i
```
2. В корне проекта, в директории backend и frontend 
скопировать данные из .env.local в .env 

3. Запуск бд, миграций, заполнение данными

Из корня проекта

```
make run - запуск бд
```
```
npm run db - установка миграций и заполнение таблиц данными
```
3. Запуск бэкенда и фронтеда

Из корня проекта
```
npm start
```

### Docker
```
make run - запуск бд
```
```
make down - остановка всех контейнеров
```