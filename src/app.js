import Express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

// Import Routes
import addUserRoutes from './routes/users'

let app = new Express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Add Routes
app = addUserRoutes('/api/v1', app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  console.log(`
**** Running in Development Mode ****
  `)
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

const server = app.listen(3000, () => {
  console.log('Listening on port 3000')
})
