import '../App.css';
import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list:[],
            currentVal:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.detectVal = this.detectVal.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.currentVal.length>0 ){
        this.setState(state=>({
            list: [...state.list,state.currentVal],
            currentVal: ''
           // list: this.state.list.push("test")
        }))
        document.querySelector("#todoVal").value= "";
    }
    

    }

    detectVal =(event) => {
        this.setState(state=>({
            currentVal: event.target.value
        }))

    }

 

    render() {
        return(
            <div id="todoForm">
                <form onSubmit={this.handleSubmit}>
                    <input className="itemAddition" type="text" id="todoVal" onChange={this.detectVal} name="item" />
                    <input className="addButton" type="submit" id="submitButton" value="Add"/>
                </form>
                {this.state.list.map((val)=>{
                    return(<div style={{display:'flex', alignItems:'center', margin:'0.5rem'}}><div style={{width:'10rem', textAlign:'center'}}><p>{val} </p></div> <button className='removeButton'>-</button></div>);
                })}
                    

                
            </div>
        )
    }
}


export default Todo;