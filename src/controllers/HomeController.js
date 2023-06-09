import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jorge',
      sobrenome: 'Henrique',
      email: 'jh@hotmail.com',
      idade: 25,
      peso: 33,
      altura: 2.1,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
