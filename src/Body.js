import RestauntCard from '../src/RestauntCard'
import rest from '../util/restCards'
import { useEffect, useState } from 'react'
import Shimmer from '../src/Shimmer'



const Body = () => {
    const [listOfRes, setlistOfRes] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [seachValue, setseachValue] = useState("");

    const searchFunction = (event) => {
        const searchInput = event.target.value
        console.log(searchInput)
        const filteredList1 = listOfRes.filter((each)=> each.info.name.toLowerCase().includes(searchInput.toLowerCase()))
        setfilteredList(filteredList1)
    }

    useEffect(()=>{
        console.log("use effect cld")
        fetchData()
    },[])

    console.log("body")

    const fetchData = async() => {
        console.log("fetch method cld")
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const list = await data.json()
        // console.log(list?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //optional chaining(?.)
       setlistOfRes(list?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setfilteredList(list?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    

    return listOfRes.length === 0 ? <Shimmer/> : (
        <div>
            <div className='body-header'>
                <input type = "search" onChange={searchFunction} placeholder='search'/>
                <input type = "text" value = {seachValue} onChange={(e)=>{
                    setseachValue(e.target.value)
                }}/>
                <button onClick={()=>{
                    const filteredList1 = listOfRes.filter((each)=> each.info.name.toLowerCase().includes(seachValue.toLowerCase()))
                    setfilteredList(filteredList1)
                }}>search</button>
                <button className="top-rated-btn" onClick={()=>{
                    const filteredlistOfRes = listOfRes.filter((each) => each.info.avgRating > 4.2)
                    setfilteredList(filteredlistOfRes)
                }
                }>Top Restraunts</button>
            </div>
            <div className="restraunt-container">
                {filteredList.map((each) => <RestauntCard restItem = {each} key = {each.info.id}/>)}
                
            </div>
        </div>
    )
}
export default Body