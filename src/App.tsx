import logo from './assets/logo.svg';
import './App.css';
import {Theme} from "./styles/Theme";

const App = () => {
  return (
      <Theme>
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      UiKit and Storybook on 6006 port
                  </p>
              </header>
          </div>
      </Theme>

  );
}

export default App;
