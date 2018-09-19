import React from 'react';
import Container from './components/Container';
import './App.scss';

class App extends React.Component {
  state = {
    theme: 'light',
    themes: ['light', 'dark'],
  }

  setTheme = (e) => {
    this.setState({ theme: e.target.value });
  }

  render() {
    const { theme, themes } = this.state;

    return (
      <div data-theme={theme}>
        <Container>
          <h1>Hello World</h1>
        </Container>
        <div>
          {themes.map(name => (
            <label>
              {name}
              <input
                type="radio"
                name="theme"
                value={name}
                checked={theme === name}
                onChange={this.setTheme}
              />
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default App;