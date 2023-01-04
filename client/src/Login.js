import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function Login ({setUser, clap}) {

    return (
        <div id="LoginFlex">
            <LoginForm 
                setUser={setUser}
                clap={clap}
            />
            <SignupForm
                setUser={setUser}
                clap={clap}
            />
        </div>
    )
}

export default Login