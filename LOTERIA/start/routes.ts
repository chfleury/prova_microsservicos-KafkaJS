import Route from '@ioc:Adonis/Core/Route'
// import Producer from 'App/KafkaService/producer'

Route.get('/', async () => {
  const producer = new Producer()
  await producer.produce({ topic: 'new-bet', messages: 'teste' })
  console.log(producer)
  return { hello: 'world!!!' }
})

Route.get('/', async () => {})

Route.post('login', 'AuthController.login')
Route.post('users', 'UsersController.store')

Route.group(() => {
  Route.get('users', 'UsersController.index')
  Route.get('users/:id', 'UsersController.show')
  Route.put('users/:id', 'UsersController.update')
  Route.delete('users/:id', 'Userscontroller.destroy')

  Route.resource('bets', 'BetsController')

  Route.get('games', 'GamesController.index')
  Route.get('games/:id', 'GamesController.show')

  Route.post('forgot_password', 'ForgotPasswordController.store')
  Route.put('forgot_password', 'ForgotPasswordController.update')

  Route.group(() => {
    Route.post('/', 'GamesController.store')
    Route.put('/:id', 'GamesController.update')
    Route.delete('/:id', 'GamesController.destroy')
  })
    .prefix('games')
    .middleware('isAdmin')
}).middleware('auth')
