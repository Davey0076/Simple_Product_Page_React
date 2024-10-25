import React from "react";
import ShoeDetail from "./components/ShoeDetail.component";
import ShoeType from "./components/ShoeType.component";

function MainWrapper(){
    return (
        <div className="main-wrapper">
    <ShoeType shoeName="Nike High Dunks"/>
    <ShoeDetail description="The Nike High Dunk Shoes are a stylish and versatile blend of classic basketball design and modern streetwear. Known for their high-top silhouette, 
    durable leather construction, and cushioned support, 
    these sneakers provide both comfort and a bold fashion statement.
     Perfect for casual wear or hitting the court, 
     the Nike High Dunks offer a timeless look with a variety of colorways to suit any style." 
    color="Blue" size="43"/>
    </div>
    )
}

export default MainWrapper;