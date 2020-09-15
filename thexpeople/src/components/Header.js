import React from "react" 



class Header extends React.Component {  
  constructor() {
    super()
    this.state={
      username:"",
      password:"",
      search:""

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
handleChange(event){
  this.setState({
    [event.target.name]:event.target.value
  })
}
  handleSearch(event){
    this.setState({
      search:event.target.value
    })

}

  render(){

    return(
      <form>
          <br></br>
          <table className="bigman">
            <tr>
              <td>
               <h1 className="enter">LogIn</h1>
               <input 
               placeholder="username" 
               name="username" 
               type="text"
               value={this.state.username}
               onChange={this.handleChange}/>
               <input 
               placeholder="password" 
               name="password" 
               type="text"
               value={this.state.password}
               onChange={this.handleChange}/>
              </td>
              <td className="smallman">
                <h1 className="searchbutton">Search</h1> 
                <input className="searchbox" 
                placeholder="search" 
                name="" 
                type="text"
                onChange={this.handleSearch}/> 
              </td>

            </tr>
            
            

            <h2 className="press">Not a member yet ? <span className="signup">SignUp</span></h2>
          </table>



          
      
        <br></br>
        <br></br>
      
        <h1 className="navbar">theXpeople<sup className="top">blog</sup></h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        
          <center>

          <td className="c1">Home</td>
          <td className="c2">Newsletter</td>
          <td className="c3">Contact</td>

          </center>
          

        
        
        
        
    
  
  
  
      </form>
        
    )
  }

  }
  


export default Header