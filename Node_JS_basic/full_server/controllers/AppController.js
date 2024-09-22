class AppController {
  constructor(userController) {
    this.userController = userController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:id').get(this.userController.getUser);
    router.route('/').get(this.userController.getUsers);
    router.route('/').post(this.userController.createUser);
    return router;
  }
}


class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = (req, res) => {
    const user = new User(req.body.email, req.body.password, req.body.age);
    return res.status(201).send(this.userService.addUser(user));
  };

  getUsers = (_, res) => res.status(200).send(this.userService.getUsers());

  getUser = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.userService.getUser(id));
  };
}