import React from 'react';
import ChangeColorButton from './Calculator/ChangeColorButton';
import { Theme, themes } from './theme-context';

import Calculator from './Calculator/Calculator';

class App extends React.Component {
  state = {
    darkTheme: true
  }

  changeColorHandler = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
    console.log('clicked');
  }

  render() {
    const themeColor = this.state.darkTheme ? themes.dark : themes.light;
    
    return (
      <div>
        <Theme.Provider value = {themeColor}>
          <Calculator />
          <ChangeColorButton 
            buttonClicked={this.changeColorHandler}
            isDark={this.state.darkTheme} />
        </Theme.Provider>
      </div>
    );
  }
}

export default App;