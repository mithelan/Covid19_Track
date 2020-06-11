import React, { Component } from 'react'

import corona from './s.jpg'
import {Cards,Country,Graph} from './components'
import styles from './App.module.css'
import {fetchData} from "./api";
import Typography from "@material-ui/core/Typography";

class App extends Component {

    state={
        data:{},
        country:''

    }

    async componentDidMount() {
        const newData=await fetchData();

        this.setState({data:newData})

    }

    handleCountryChange =async (country)=>{
        //fecth
        //setstae
       //
        const newData=await fetchData(country);

        this.setState({data:newData,country:country})
    }


    render() {
        const {data,country}=this.state;


    return (
      <div className={styles.container}>

          <img className={styles.image} src={corona} alt='img' />

        <Cards data={data}/>
        <Country handleCountryChange={this.handleCountryChange}/>
        <Graph data={data} country={country}/>



        <div className={styles.footer}>

            <Typography color='black'>
                Powered by VSK
            </Typography>



        </div>

      </div>
    )
  }
}

export default App
