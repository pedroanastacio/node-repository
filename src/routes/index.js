
const indexRoutes = (app) => {
    
	app.route('/')
		.get((req, res) => res.send('Bem-vindo(a) ao My To Do List!'))

}

export default indexRoutes