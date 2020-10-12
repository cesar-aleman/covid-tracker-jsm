import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'


class App extends React.Component {
    state = {
        data: {}, 
        country: '',
    }


    async componentDidMount () {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);    

        this.setState({ data: fetchedData, country: country })
    }


    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19 is bad" />
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <br /> 
                <h3>With a lot of help from <a href="https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A">JavaSciptMastery</a></h3>
                
                
            </div>
        )
    }
}

export default App;