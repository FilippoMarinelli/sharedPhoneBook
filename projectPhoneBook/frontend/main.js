import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import CadastrarContato from './modules/CadastrarContato';

const cadastrarContato = new CadastrarContato('.form-cadastrarContato');
const editarContato = new CadastrarContato('.form-editarContato');
const cadastro = new Login('.form-cadastro');
const login = new Login('.form-login');
login.init();
cadastro.init();
cadastrarContato.init();
editarContato.init();
