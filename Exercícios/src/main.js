import axios from 'axios';

// import ClasseUsuario,{idade as IdadeUsuario} from './functions';

// ClasseUsuario.info();

// const h4Element = document.querySelector('h4#idade');
// const h4Text = document.createTextNode("A idade é "+IdadeUsuario);
// h4Element.append(h4Text);

// const delay = () => new Promise(resolve => setTimeout(resolve('ok'), 1000));

// async function umPorSegundo() {
//  try {
//    console.log(await delay());
//    console.log(await delay());
//    console.log(await delay());
   
//  } catch (error) {
//    console.log(error);
//  }
// }

// umPorSegundo();

// async function getUserFromGithub(user) {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(response.data);
//   } catch (error) {
//     console.log('Usuário não existe');
//   }
//  }
//  getUserFromGithub('diego3g');
//  getUserFromGithub('diego3g124123');
 
// class Github {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`);
//       console.log(response.data);
//     } catch (error) {
//       console.log('Repositório não existe');
//     }
//   }
//  }
//  Github.getRepositories('rocketseat/rocketseat.com.br');
//  Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => console.log(await axios.get(`https://api.github.com/users/${usuario}`));
 buscaUsuario('diego3g');