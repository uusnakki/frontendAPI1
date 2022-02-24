import { useState } from 'react';
import '../App.css';
import axios from 'axios'

const multiUrl = '/math/multipleprimes'
const intUrl = '/math/prime'


const IntegerTable = () => {
    const [addIntData, setIntData] = useState(1);
    const [addSumData, setSumData] = useState(1);

    //Handles the value change in the form
    /*
    * Checks the value from the "name" attribute.
    * Value can be string or a number (name or age).
    * We add the values to the persondata state.
    */
    const handleSumFormChange = (event) => {
        event.preventDefault();
        const fieldValue = event.target.value;
        setSumData(fieldValue);
    };

    //Handles the "Count the values" button
    /*
    * Sends the numbers to then backend of the app.
    */
    const handleSumSubmit = (event) => {
        event.preventDefault();

        axios.post(multiUrl, {
            addSumData
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    //Handles the value change in the form
    /*
    * Changes the singular int data to the one in the form
    */
    const handleIntFormChange = (event) => {
        event.preventDefault();
        const fieldValue = event.target.value;
        setIntData(fieldValue);
    };

    //Handles the "Count the values" button
    /*
    * Sends the numbers to then backend of the app.
    */
    const handleIntSubmit = (event) => {
        event.preventDefault();

        axios.post(intUrl, {
            addIntData
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div>
            <form className="IntegerTable" onSubmit={handleSumSubmit}>
                <label >
                    Numbers to be summed:
                    <input
                        className="InputStyle"
                        type="number"
                        name="sumValue"
                        placeholder="Enter the integers..."
                        onChange={handleSumFormChange} />
                </label>
                <br />
                <input className="buttonAdd" type="submit" value="Count the values" />
                <br />
            </form>
            <form className="IntegerTable" onSubmit={handleIntSubmit}>
                <label >
                    Number:
                    <input
                        className="InputStyle"
                        type="number"
                        name="intValue"
                        placeholder="Enter a value..."
                        onChange={handleIntFormChange} />
                </label>
                <br />
                <input className="buttonAdd" type="submit" value="Check if the number is a prime" />
                <br />
            </form>
        </div>
    );
};

export default IntegerTable;