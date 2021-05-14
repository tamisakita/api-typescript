import Controller from '../controllers/createUser'
import { HTTPRequest, HTTPResponse } from '../interfaces/http';

class CreateUserController  implements Controller {

  handle(request: HTTPRequest): HTTPResponse {
    let { body } = request;

    let requiredFirelds = ['name', 'email', 'password', 'passwordConfirmation'];

    for(let field of requiredFirelds) {
      if(!body[field]) {
        return {
          status: 400
        }
      }
    }

    let { password, passwordConfirmation } = body;

    if(password != passwordConfirmation) {
      return {
        status: 400
      }
    }
    
    return {
      status: 200
    }
  }
}

export default CreateUserController;