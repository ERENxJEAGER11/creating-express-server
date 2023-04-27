import Login from './Components/login/Login.jsx';
import UserCard from './Components/userCard/UserCard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* login Components */}
      <UserCard/>
      <Login/>  
    </div>
  );
}

export default App;
