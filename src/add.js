import React from 'react';




export default class Todos extends React.Component{

    constructor(props) {
        super(props);
  
        this.state={
          index:0,
          tab:["informatique","hello","good","shopping"],
          value:"",
          
  
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
 

      handleSubmit() {
          this.state.tab.push(this.state.value)
          this.setState({value : ""})
          console.log(this.state.tab)
      }
    
    
    
    

    handleChange(event) {
        this.setState({value: event.target.value});
       
        console.log(this.state.value)
      }

      
      selectElement(e) {

        this.setState({index:e})
        this.state.tab.splice(this.state.index,1) ;
        this.setState({value:" "})   ;

            
         }
         


    render(){
        
    return(
            <div>
        <input type="text" onChange={this.handleChange} />
<button onClick={this.handleSubmit}>
      
      add
      </button>
      <ul>

 {this.state.tab.map((element,index) =>(  
           <li >
             <div>{element}
           
            <button onClick={()=>{
              this.selectElement(index)
            }}>
              remove
            </button>
            </div>
               
           </li>))
          
          
          }
      </ul>
      
      
  
    </div>
    
    )

        
    }
  }
