import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './pages/login/Login.tsx';
import SignupForm from './pages/sign-up/SIgnUp.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
                <Route path="/" element={<LoginForm/>}/>
            </Routes>
        </Router>
    );
}

export default App;