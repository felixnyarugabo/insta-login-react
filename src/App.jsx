import './App.css'
function App(){
  return <div className="container">
    <div className='left'>

      <h1>See everyday moments from <br /><br/>your<span>close friends</span>. </h1>
      <img src="./images/left.png" alt="" />
    </div>
    <div className='right' >
      
      <p>Log into Instagram</p>
      <input type="text" placeholder='Mobile number, username or email' />
      <input type="password" placeholder='password' />
      <button className='log'>log in</button>
      <p><a href="/index.html"> forgot password</a></p>

      <button>log in With Facebook</button>
      <button>create new account</button>

      <p>meta</p>

    </div>
    
   
  </div>
}

export default App;