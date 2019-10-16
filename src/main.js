import api from './api';

class App{
  constructor(){
    this.repositories = [];

    this.formElement = document.querySelector("form#repo-form");
    this.ulElement = document.querySelector("ul#repo-list");
    this.inputElement = document.querySelector("input#repo-name");
    
    this.handleSubmit();
    this.render()
  }

  handleSubmit(){
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true){
    if(loading){
      let loadingElement = document.createElement('span');
      loadingElement.appendChild(document.createTextNode('Carregando...'));
      loadingElement.setAttribute('id','loading');

      this.formElement.appendChild(loadingElement);
    } else {
      document.getElementById('loading').remove();
    }

  }

  async addRepository(event){
    event.preventDefault();

    const nameRepo = this.inputElement.value;
    
    if(nameRepo.length === 0)
      return;

    this.setLoading();
    try {
      const response = await api.get(`/repos/${nameRepo}`);
      
      const {name,description,html_url, owner:{avatar_url}} = response.data;
  
      this.repositories.push({
        name,
        description,
        image_url:avatar_url,
        url:html_url
      });
      
      this.inputElement.value = "";
  
      this.render();
      
    } catch (error) {
        alert("Usuário/Repositório não encontrado!")
    }

    this.setLoading(false);
  }

  renderLi(repository){
    let liElement = document.createElement("li");
      
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src",repository.image_url);
      
    let strongElement = document.createElement("strong");
    strongElement.appendChild(document.createTextNode(repository.name));

    let pElement = document.createElement("p");
    pElement.appendChild(document.createTextNode(repository.description));

    let accessElement = document.createElement("a");
    accessElement.setAttribute("href",repository.url);
    accessElement.appendChild(document.createTextNode("Accessar"));

    liElement.appendChild(imgElement);
    liElement.appendChild(strongElement);
    liElement.appendChild(pElement);
    liElement.appendChild(accessElement);

    this.ulElement.appendChild(liElement);
  }

  render(){
    this.ulElement.innerHTML = '';
    this.repositories.forEach(repository => {
      this.renderLi(repository);
    })
  }
}

new App();