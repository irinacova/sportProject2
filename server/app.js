// подключаем экспресс
const express = require('express');
//подключаем пути, можем загружать статичные файлы
const path = require('path')
//подключаем енв для кодирования паролей и портаб в данном случае для порта
require('dotenv').config();
//подключаем приложение 
const app = express();
//миддлварка на удаление заголовка в запросе в инструментах разработика
const removeHeader = require('./middleware/removeHeaders')
//находит пользователя и записывает его в апплокалс
const userFind = require('./middleware/userFind')
//позволяет читать пост запросы
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//для чтения статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

//используем функции миддлварки
app.use(removeHeader);
app.use(userFind);
//подключааем роуты
const indexRouter = require('./routes/index')
app.use('/api',indexRouter)



//запускаем сервер 
app.listen(process.env.PORT, () => { console.log(`Server started on ${process.env.PORT} port`) });



