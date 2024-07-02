const express = require('express');
const path = require('path')
const app = express();
const removeHeader = require('./middleware/removeHeaders')
const userFind = require('./middleware/userFind')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use(removeHeader);
app.use(userFind);

const indexRouter = require('./routes/index')
app.use('/api',indexRouter)




app.listen(3000, () => { console.log('Server started on 3000 port') });



