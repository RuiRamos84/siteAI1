
'use strict';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone: '',
      mail: '',      
      mcontact:'',
      description: ''
    };    
  } 
 
  ChangeHandler = (event) => {
    const input = event.target; // seleciona o elemento do envento
    const value = input.type === 'select' ? input.selected : input.value;//se for do tipo select, vai buscar o selected value, caso contrario retia o value
    //console.log(input,value) 
    this.setState({ [input.name]: value }); // vai definir o state utilizando o name do elemento e o seu value
  };
  
  SubmitHandler = () => {
    const { mcontact, description, mail,phone, username  } = this.state;   
    localStorage.setItem('username',  username );
    localStorage.setItem('phone',  phone );
    localStorage.setItem('mail',  mail );
    localStorage.setItem('description',  description );
    localStorage.setItem('mcontact',  mcontact );     
  };
    render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <h1>Pedido de Contacto {this.state.username} {this.state.mail}</h1>
        <label for="username">
          <b>Nome </b>
        </label>
        <input type='text' id='username' name='username' onChange={this.ChangeHandler}/>
        <br/><br/>
        <label>
          <b>Telefone</b>
        </label>
        <input type='tel' name='phone' onChange={this.ChangeHandler}/> 
        <br/><br/>
        <label>
          <b>E-mail</b>
        </label>
        <input type="email" name='mail'  onChange={this.ChangeHandler}/>
        <br/><br/>
        <label>
         <b>Motivo de contacto</b>
        </label>      
          <select name='mcontact' onChange={this.ChangeHandler}>
            <option value="Escolha uma opção...">Escolha uma opção...</option>
            <option value="Informação">Informação</option>
            <option value="Reclamação">Reclamação</option>
            <option value="Outra">Outra</option>            
          </select>       
      <br/><br/>
      <label>
      <b>Descrição </b>
      </label>
      <textarea name="description" id="description"placeholder="Descreva o motivo pelo qual nos contacta" onChange={this.ChangeHandler}/>
      <br/><br/><br/>      
      <button type="submit">Enviar</button>  
      </form>     
    );
  }
}
ReactDOM.render(<Form />, document.getElementById('root'));

