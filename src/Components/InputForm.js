import React, {useState} from 'react';
import classes from './InputForm.module.css';
const stateData = [
    {
        "id": 7,
        "state": "Andaman and Nicobar Islands"
    },
    {
        "id": 8,
        "state": "Arunachal Pradesh"
    },
    {
        "id": 9,
        "state": "Assam"
    },
    {
        "id": 10,
        "state": "Bihar"
    },
    {
        "id": 11,
        "state": "Chandigarh"
    },
    {
        "id": 4,
        "state": "Chhattisgarh"
    },
    {
        "id": 12,
        "state": "Dadra and Nagar Haveli"
    },
    {
        "id": 13,
        "state": "Daman and Diu"
    },
    {
        "id": 14,
        "state": "Delhi"
    },
    {
        "id": 15,
        "state": "Goa"
    },
    {
        "id": 6,
        "state": "Gujarat"
    },
    {
        "id": 16,
        "state": "Haryana"
    },
    {
        "id": 17,
        "state": "Himachal Pradesh"
    },
    {
        "id": 18,
        "state": "Jammu and Kashmir"
    },
    {
        "id": 19,
        "state": "Jharkhand"
    },
    {
        "id": 5,
        "state": "Karnataka"
    },
    {
        "id": 20,
        "state": "Kerala"
    },
    {
        "id": 21,
        "state": "Ladakh"
    },
    {
        "id": 22,
        "state": "Lakshadweep Islands"
    },
    {
        "id": 3,
        "state": "Madhya Pradesh"
    },
    {
        "id": 1,
        "state": "Maharashtra"
    },
    {
        "id": 23,
        "state": "Manipur"
    },
    {
        "id": 24,
        "state": "Meghalaya"
    },
    {
        "id": 25,
        "state": "Mizoram"
    },
    {
        "id": 26,
        "state": "Nagaland"
    },
    {
        "id": 27,
        "state": "Odisha"
    },
    {
        "id": 28,
        "state": "Pondicherry"
    },
    {
        "id": 29,
        "state": "Punjab"
    },
    {
        "id": 30,
        "state": "Rajasthan"
    },
    {
        "id": 31,
        "state": "Sikkim"
    },
    {
        "id": 32,
        "state": "Tamil Nadu"
    },
    {
        "id": 2,
        "state": "Telangana"
    },
    {
        "id": 33,
        "state": "Tripura"
    },
    {
        "id": 34,
        "state": "Uttar Pradesh"
    },
    {
        "id": 35,
        "state": "Uttarakhand"
    },
    {
        "id": 36,
        "state": "West Bengal"
    }
]

const divisionData = [
    {
        "id":1,
        "division":"Pune"
    },
    {
        "id":2,
        "division":"Nashik"
    },
    {
        "id":3,
        "division":"Amravati"
    },
    {
        "id":4,
        "division":"Aurangabad"
    },
    {
        "id":5,
        "division":"Nagpur"
    },
    {
        "id":6,
        "division":"Konkan"
    }
]

const districtData = [
    {
        "id":1,
        "district":"Ahmednagar"
    },
    {
        "id":2,
        "district":"Dhule"
    },
    {
        "id":3,
        "district":"Jalgaon"
    },
    {
        "id":4,
        "district":"Nashik"
    },
    {
        "id":5,
        "district":"Nandurbar"
    },
    {
        "id":6,
        "district":"Mumbai"
    },
    {
        "id":7,
        "district":"Thane"
    },
    {
        "id":8,
        "district":"Palghar"
    },
    {
        "id":9,
        "district":"Pune"
    },
    {
        "id":10,
        "district":"Kolhapur"
    }
]

const talukaData = [
    {
        "id":1,
        "taluka":"Sangamner"
    },
    {
        "id":2,
        "taluka":"Rahuri"
    },
    {
        "id":3,
        "taluka":"Akole"
    },
    {
        "id":4,
        "taluka":"Shrirampur"
    },
    {
        "id":5,
        "taluka":"Rahata"
    },
]

const villageData = [
    {
        "id":1,
        "village":"Chandanapuri"
    },
    {
        "id":2,
        "village":"Ghargaon"
    },
    {
        "id":3,
        "village":"Warvandi"
    },
    {
        "id":4,
        "village":"Ghulewadi"
    },
]

const InputForm = (props) => {

    const [stateName,setStateName] = useState('');
    const [division,setDivision] = useState('');
    const [district,setDistrict] = useState('');
    const [taluka,setTaluka] = useState('');
    const [village,setVillage] = useState('');

    const stateNameChangeHandler = (event) => {
        console.log(event.target.value);
        setStateName(event.target.value);
    }
    
    const divisionChangeHandler = (event) =>{
        setDivision(event.target.value);
    }

    const districtChangeHandler = (event) =>{
        setDistrict(event.target.value);
    }

    const talukaChangeHandler = (event) =>{
        setTaluka(event.target.value);
    }

    const villageChangeHandler = (event) =>{
        setVillage(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();

        props.addData(
            {
                "state":stateName,
                "division":division,
                "district":district,
                "taluka":taluka,
                "village":village
        });

        setStateName('');
        setDivision('');
        setDistrict('');
        setTaluka('');
        setVillage('');
    };

    return (
        <div className={classes.form}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="">Select State</label>
                    <select id="state" onChange={stateNameChangeHandler} value={stateName} >
                        <option>Select State</option>
                        {stateData.map((item)=>{
                            return <option key={item.id}>{item['state']}</option>
                        })};
                    </select>
                </div>
                <div>
                    <label htmlFor="">Select Division</label>
                    <select id="division" onChange={divisionChangeHandler} value={division}>
                    <option>Select Division</option>
                        {divisionData.map((item)=>{
                            return <option>{item['division']}</option>
                        })};
                    </select>
                </div>  
                <div>
                    <label htmlFor="">Select District</label>
                    <select id="district" onChange={districtChangeHandler} value={district}>
                    <option>Select District</option>
                        {districtData.map((item)=>{
                            return <option>{item['district']}</option>
                        })};
                    </select>
                </div>  
                <div>
                    <label htmlFor="">Select Taluka</label>
                    <select id="taluka" onChange={talukaChangeHandler} value={taluka}>
                    <option>Select Taluka</option>
                        {talukaData.map((item)=>{
                            return <option>{item['taluka']}</option>
                        })};
                    </select>
                </div>  
                <div>
                    <label htmlFor="">Select Village</label>
                    <select id="village" onChange={villageChangeHandler} value={village}>
                    <option>Select Village</option>
                        {villageData.map((item)=>{
                            return <option>{item['village']}</option>
                        })};
                    </select>
                </div>

                <div className={classes.buttonDiv}> 
                    <button className={classes.clear}>Clear</button>
                    <button className={classes.submit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default InputForm;