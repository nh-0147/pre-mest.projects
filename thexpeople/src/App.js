import React from "react";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js"


class App extends React.Component{

   render(){
    return (
      <div>
        <Header/>

        <table>
          <tr>
            <td>
              
        <Content 
          title="How to Find 2K on the Floor" 
          author="written by Prof. Armah Ashitey R" 
          date="28/08/2020" 
          snippet="Sagittis vitae et leo duis ut diam quam nulla.Sit amet aliquam id diam maecenas.
          Quam quisque id diam vel quam elementum.Sagittis vitae et leo."
          more="READ MORE"
          />
          </td>
          
          <td>
        <Content 
          title="How to Scatter Your Crush's Current Relationship" 
          author="written by Dr. Armah Z" 
          date="31/08/2020"
          snippet="Sagittis vitae et leo duis ut diam quam nulla.Sit amet aliquam id diam maecenas.
          Quam quisque id diam vel quam elementum.Sagittis vitae et leo."
          more="READ MORE"
          />
          </td>
        
          </tr>
          <tr>
            <td>
        <Content 
          title="How to Plant Money" 
          author="written by Mr. Gibbs D" 
          date="01/09/2020"
          snippet="Sagittis vitae et leo duis ut diam quam nulla.Sit amet aliquam id diam maecenas.
          Quam quisque id diam vel quam elementum.Sagittis vitae et leo."
          more="READ MORE"
          />
          </td>
          <td>
        <Content 
          title="How to Find Money on the Floor" 
          author="written by Mr. Armah B" 
          date="10/09/2020"
          snippet="Sagittis vitae et leo duis ut diam quam nulla.Sit amet aliquam id diam maecenas.
          Quam quisque id diam vel quam elementum.Sagittis vitae et leo."
          more="READ MORE"
          />
          </td>
          </tr>
        </table>
        <Footer/>
  
        
      
  
        
          
      
      </div>
    );
   }
  
}

export default App;
