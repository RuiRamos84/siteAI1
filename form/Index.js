
'use strict';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberMe: true,
      username: '',
      Phone:'',
      mail: null,
      description: '',
      mcontact:''
      
    };
    
  }
  


 

 

  SubmitHandler = (event) => {
    let nam = event.target.Phone;
    let val = event.target.value;
    this.setState({[nam]: val});
    
  }
  

  SubmitHandler = (event) => {
    event.preventDefault();
    let mail = this.state.mail;
    
  }
  ChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }


  SubmitHandler = (event) => {
    let nam = event.target.description;
    let val = event.target.value;
    this.setState({[description]: val});
  }
  ChangeHandler = (event) => {
    let nam = event.target.description;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

 
  ChangeHandler = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };

  
  SubmitHandler = () => {
    const { mcontact, description, mail,Phone, username, rememberMe } = this.state;
   // localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('username',  username );
    localStorage.setItem('Phone', username ? Phone : '');
    localStorage.setItem('mail', username ? mail : '');
    localStorage.setItem('description', username ? description : '');
    localStorage.setItem('Motivo de Contacto', username ? mcontact : '');
    
    
    
  };
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const username = rememberMe ? localStorage.getItem('username') : '';    
    this.setState({ username, rememberMe });
    
  }
 



  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <h1>Pedido de Contacto {this.state.username} {this.state.mail}</h1>
        <b>Nome </b>
         <input type='text' name='username' onChange={this.ChangeHandler}/>         
          
      <br/>
      <br/> 

      <b>Telefone </b>
         <input type='text' name='Phone' onChange={this.ChangeHandler}/> 
         <br/>
      <br/>
      <lable>
      <b>E-mail </b>
      <input type='text' name='mail'  onChange={this.ChangeHandler}/>
      </lable>
      <br/>
      <br/>
      
         <b>Motivo de contacto</b>
          <select value={this.state.value} onChange={this.ChangeHandler}>
            <option value="Escolha uma opção...">Escolha uma opção...</option>
            <option value="Informação">Informação</option>
            <option value="Reclamação">Reclamação</option>
            <option value="Outra">Outra</option>
            
          </select>
        
      <br/>
      <br/>
      <b>Descrição </b>     
      <textarea name="description" id="description"placeholder="Descreva o motivo pelo qual nos contacta" id={this.state.description}  />
      <br/>
      
      
      <br/>
      <br/>
       
      <button type="submit">Enviar</button>  
      
      </form>
      
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));

