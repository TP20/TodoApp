import React from 'react'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


{/*class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
       // event.preventDefault();
        let navigate = useNavigate();

       // this.props.history.push("/todoListPage");
       navigate(`/todoListPage`);
    }

    render() {
        return (
            <div>
                <div style={{height:"50rem", display:"flex", justifyContent:"center", alignItems:"center" }}>
                <div>
                <div style={{border:"1px solid black", width:"10rem", height:"10rem"}}></div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" name="username" /> <br/>
                    <input type="password" id="password" name="password" /> <br/>
                    <input type="submit" />
                </form>
                </div>
                </div>
            </div>
        )
    }
}*/}




function LoginComponent() {
    let navigate = useNavigate(); 
    const routeChange = (event) =>{ 
        event.preventDefault();
      let path = "/todoListPage"; 
      navigate(path);
    }

    return (
        <div>
            <div style={{height:"50rem", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <div style={{border:"1px solid black", width:"10rem", height:"10rem"}}></div>
            <form style={{display:"flex", flexDirection:"column"}} onSubmit={routeChange}>
               {/*<input type="text" id="username" name="username" /> <br/>
                <input type="password" id="password" name="password" /> <br/> */}
                <TextField style={{height:"10px", margin:"1.5rem", minWidth:"15rem"}} id="demo-helper-text-misaligned" label="Name"/>
                <TextField style={{height:"10px", margin:"1.5rem", minWidth:"15rem"}} id="demo-helper-text-misaligned" label="Password" type="password"/>
                <Button style={{margin:"1.5rem"}} type="submit" variant="contained">Login</Button>

               {/* <input style={{marginTop:"1rem", minWidth:"15rem"}} type="submit" id="submitButton" />
            
            */}
            </form>
            </div>
            </div>
        </div>
    );
  } 


export default LoginComponent;