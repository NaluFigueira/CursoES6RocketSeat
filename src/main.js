import ClasseUsuario,{idade as IdadeUsuario} from './functions';

ClasseUsuario.info();

const h4Element = document.querySelector('h4#idade');
const h4Text = document.createTextNode("A idade é "+IdadeUsuario);
h4Element.append(h4Text);
