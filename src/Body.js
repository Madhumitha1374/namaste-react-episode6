import RestauntCard from '../src/RestauntCard'
import rest from '../util/restCards'
import { useState } from 'react'



const Body = () => {
    const [listOfRes, setlistOfRes] = useState(rest)

    const searchFunction = (event) => {
        const searchInput = event.target.value
        console.log(searchInput)
        const filteredList = listOfRes.filter((each)=> each.info.name.includes(searchInput))
        console.log(filteredList)
        setlistOfRes(filteredList)
    }

    return(
        <div>
            <div className='body-header'>
                <input type = "search" onChange={searchFunction}/>
                <button className="top-rated-btn" onClick={()=>{
                    const filteredlistOfRes = listOfRes.filter((each) => each.info.avgRating > 4)
                    setlistOfRes(filteredlistOfRes)
                }
                }>Top Restraunts</button>
            </div>
            <div className="restraunt-container">
                {listOfRes.map((each) => <RestauntCard restItem = {each} key = {each.info.id}/>)}
                
            </div>
        </div>
    )
}
export default Body