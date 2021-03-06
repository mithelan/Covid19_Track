import React, {Component} from 'react';
import {fetchData} from "../../api";
import styles from "../../App.module.css";
import corona from "../../mi.jpg";
import {Cards, Country, Graph} from "../index";


class Display extends Component {
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


                <div className='image'>
              

                </div>



                <Cards data={data}/>
                <Country handleCountryChange={this.handleCountryChange}/>
                <Graph data={data} country={country}/>



            </div>
        )
    }
}

export default Display;
