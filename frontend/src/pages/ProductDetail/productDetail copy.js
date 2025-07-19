import React, { useState } from "react";
import "./App.css"


export default function ProductDetail1() {
   const [quantity,setQuantity]=useState(1);
   if(quantity==1){
        setQuantity(2);
        console.log("yaaaaaaaaaaaa",quantity);
    }
}
