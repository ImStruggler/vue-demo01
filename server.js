const jsonServer=require('json-server')
const apiServer = jsonServer.create()
const apiRouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use(apiRouter)
apiServer.listen(8081, () => {
  console.log('JSON Server is running')
})
