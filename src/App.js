import React from 'react';
import {MyFirstComponent} from './components/myfirstcomponent/MyFirstComponent'
import {Routing} from './routes/Routing'
import {NavigationBar} from './components/navigationbar/NavigationBar'
import {UserProvider} from './shared/global/provider/UserProvider'
import './shared/global/css/Global.css'


function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar></NavigationBar>
      </Routing>
    </UserProvider>
  );
}

export default App;
