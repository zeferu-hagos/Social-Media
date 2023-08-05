import "./register.css"

const Register = () => {
  
  return (
    <div className="login">
          <div className="loginWraper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Zeferu-Social</h3>
                  <span className="loginDesc">
                      Connect with friends and the world around you on ZeferuSocial
                  </span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder="UserName" className="loginInput" />
                      <input placeholder="Email" className="loginInput" />
                      <input placeholder="Pasword" className="loginInput" />
                      <input placeholder="Password Again" className="loginInput" />
                      <button className="loginButton" >Sign up</button>
                      <button className="loginRegisterButton">Log into Account</button>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Register
