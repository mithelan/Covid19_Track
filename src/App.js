import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from './App.module.css'

import Typography from "@material-ui/core/Typography";

import display from "./components/Covid/Display"
class App extends Component {


    render() {



    return (
      <div className={styles.container}>
          <BrowserRouter>

              <Switch>
                  <Route exact path="/" component={display}/>


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
