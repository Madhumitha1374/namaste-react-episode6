const RestauntCard = (props) => {
    const{restItem} = props
    const{info} = restItem
    const{name, cuisines, avgRating, costForTwo, cloudinaryImageId} = info
    return(
        <div className="card-container">
            <img alt = "rest-card-img" className="rest-card-img" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(",")}</p>
            <p>{avgRating + "stars"}</p>
            <p>{costForTwo}</p>

        </div>
    )
}
export default RestauntCard