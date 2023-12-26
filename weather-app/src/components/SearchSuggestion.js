import { useEffect, useState } from "react";
import { useGetSuggestionData } from "./hooks";

const SearchSuggestion = () => {

const {getSuggestions, suggestions} = useGetSuggestionData();
const [userInput, setUserInput] = useState('');
const [shortList, setShortList] = useState([]);

useEffect(() => {
    getSuggestions();
    console.log("UseEffect triggered");
}, [])

useEffect(() => {
    if (suggestions && userInput.length > 0) {
        setShortList(suggestions.filter(item => item.name.toUpperCase().startsWith(userInput.toUpperCase())) 
        )
    } else {
        setShortList([]);
    }
}, [userInput])

console.log(shortList.length)

    return (
        <>
        {suggestions ? <>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/> 
        <input type="submit" value="Set" />
       
        {shortList.length > 0 ?
        shortList.slice(0,10).map((city, index) => 
        <div className="suggestion" key={index}>{city.name}{city.state.length > 0 ? ' ' + city.state + ', ' : ' '}{city.country}</div>) : <></>}
        </> : <p>Loading</p>}
        
        </>
        )
}

export default SearchSuggestion