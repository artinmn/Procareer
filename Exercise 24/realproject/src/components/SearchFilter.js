import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const SearchFilter = ({houses}) => {
    // iterate through the county values inhouses
    // return all county
    //store them in a set , to remove duplicates
    //create an array out of it
    //use that in the select field to display options
    let myhouses = houses;
    let countries = Array.from(new Set(myhouses.map((elem) => elem.country)));
    countries.unshift("-");
    console.log('houses',houses.length,houses);
    console.log('countries',countries.length,countries);
    let navigate = useNavigate();

    let changeHandler = (e) => {
        let country = e.target.value;
        console.log("change handler" + country);
        if (country=='-')
            navigate("/");
        else
            navigate(`searchresults/${country}`);
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    Search By Country
                    <select onChange={changeHandler} >                        
                        {
                            countries.map((elem,index)=> {
                                console.log(index,elem);
                                return (
                                    <option key={index} value={elem}> {elem} </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter ;
