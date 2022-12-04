import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import auth from "./firebase/firebase";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userSignin = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
          // Signed in 
                //const user = userCredential.user;
                //console.log(user);
          // ...
          console.log('User was Signed');
        })
            .catch((error) => {
          //const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
        });
    };


    return (
        <LoginContainer>
            <Backimg><img src="./img/bg.jpg" alt="background" />
            </Backimg>
    
        <LoginBlock>  
            
            <BlockImg><img src="./img/bg1.png" alt="blockimg" />
            </BlockImg>

            <LogDetails>
                <img src="./img/bg2.png" alt="userProfile" />
                <h2>User Log in</h2>
                <input type= "type" placeholder="username" value={username} onChange={(e)=>{e.preventDefault();setUsername(e.target.value);}}/>
                <input type= "password" placeholder="password" value={password} onChange={(e)=>{e.preventDefault();setPassword(e.target.value);}}/>
                <a href='/'> forgot password?</a>
                <LoginButton onClick={userSignin}>Log in</LoginButton>
            </LogDetails>


        </LoginBlock>
        </LoginContainer>
        );
        
   
};
export default Login;

const LoginContainer = styled.div`
img {
width: 1400px;
object-fit: contain;
}
    overflow: hidden;`;
    

const Backimg = styled.div` 
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 1000vh;
z-index: -1;
`;
const LoginBlock = styled.div`
margin-top: 55px;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap:7rem;
column-gap: 7rem;
`;
const BlockImg = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

 img {
width: 500px;
object-fit: contain;
}`;



const LogDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    font-size: 2.9rem;
    margin-top: 20px;
    margin-bottom: 35px
}

input{
    margin-bottom: 15px;
    padding: 10px 0;
    width:50%;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
}

img {
width: 100px;
object-fit: contain;
}`;

const LoginButton = styled.button`
margin-top: 20px;
padding:10px 25px;
background-color: black;
color: white;
font-weight: 600;
border: 2px solid #FF8F63;
cursor: pointer;

&:hover{
    background-color: inherit;
    color: black;
}
`;
