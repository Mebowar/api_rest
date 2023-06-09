import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jorge',
      sobrenome: 'Henrique',
      email: 'jh@hotmail.com',
      idade: 1123,
      peso: 233,
      altura: 2.1,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
