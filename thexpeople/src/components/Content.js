import React from "react" 



class Content extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 0
      
    }
    this.upVotes = this.upVotes.bind(this)
    this.downVotes = this.downVotes.bind(this)
  }

  upVotes() {
      this.setState(prevState => {
        return {
          count: prevState.count +1
        }
        
      })
  }

  downVotes(){
    this.setState(newState => {
      return{
        count: newState.count +1
      }
    })
    
  }

 

  render(){
    return(


      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
          <h1 className="blog1">{this.props.title}</h1>
          <h2 className="author1">{this.props.author}</h2>
          <p className="date">{this.props.date}</p>
          <br></br>
          <p className="para1">
            {this.props.snippet}<br></br>
            {this.props.snippet}<br></br>
            {this.props.snippet}
          </p>
  
             <br></br>
             <br></br>
  
        <h2 className="readmore">{this.props.more}</h2>
      
      <center>
        <td>
        <h1 className="num">{this.state.count}</h1>        
        <button onClick={this.upVotes}>Like</button>
        </td>
        <td>
        <h1 className="num1">{this.state.count}</h1>
        <button onClick={this.downVotes}>Dislike</button>
        </td>
        </center>

       <br></br>
       <br></br>
       <br></br>
       
 
      
        
       
  
      </div>
    )
  
  }
 
 }


export default Content