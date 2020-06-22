import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import corona from './s.jpg'
import {Cards,Country,Graph} from './components'
import styles from './App.module.css'
import {fetchData} from "./api";
import Typography from "@material-ui/core/Typography";


import Help from "./components/Help/help";
import display from "./components/Covid/Display"
class App extends Component {


    render() {



    return (
      <div className={styles.container}>
          <BrowserRouter>

              <Switch>
                  <Route exact path="/" component={display}/>
                  <Route exact path="/help" component={Help}/>

              </Switch>
          </BrowserRouter>







        <div className={styles.footer}>

            <Typography color='black'>
                Powered by Beat the eaters team
            </Typography>
          </div>

      </div>
    )
  }
}

export default App
