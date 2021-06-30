import React, { useState } from "react";
import LoginForm from "./components/LoginForm"; /* naka-import yung javascript ng loginforms para kapag na
nainput ang correct email and password sa constant adminUser tatama ang nasa if statement*/
import logo from './bg.gif'; /*ito naman sa gif na gagamitin ko*/

function App() {
  const adminUser = { 
    /*yung constant na adminUser ay magagamit sa if else if mag tugma yung entry sa email and password*/
    
    email:"samsonkyla@gmail.com", /*eto naman yung magiging account para makalogin*/
    password: "kylamae25" /*password ng account na nagawa*/
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){ /*eto yung sa if else statement*/
      /*yung email at password kapag nag tugma sa pag input ng user ay makakalogin ito*/
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else { 
      /*kapag hindi naman nag match yung nilogin ng user, ay lalabas ang Details do not match*/
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? ( 
        /*kapag nakalogin na yung user, eto naman ang lalabas sa logged-in form*/
        /*ang mga nasa loob ng div ang makikita ng user kapag naka login na siya*/
        <div className="logged-in"> 
          <img src={logo} className="logo" alt="Logo" />;
          <h2>Name: Kyla Mae A. Samson</h2>
          <h2>Course & Section: BSIT-32E2</h2>
          <h2>Hobbies: <span>Listening to musics</span>, 
          <span> Reading Books </span>and  
          <span> Watching Series & Movies. </span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
