import React, {Component} from 'react';
import Header from './components/Header';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Message from './components/Message';
import User from './components/User';
import './App.css';


class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    }
  };

  render() {
    // ...
    return (
      <div className="App">
        
        <User firstName={this.state.userA.firstName} />
        <User firstName={this.state.userB.firstName} />
        <Header></Header>

                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="*****" />
                <CoolButton isDanger marginButton>Submit</CoolButton>
                <Message isDark name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
                <Message isPrimary name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
                <Message isLink name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
                <Message isInfo name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
                <Message isSuccess name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
                <Message isDanger name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
                <Message isWarning name="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
        {/* ... */}
      </div>
    );
  }
}


export default App;
