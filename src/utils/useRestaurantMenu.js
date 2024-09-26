import { useEffect, useState } from "react";
import { RESID_LINK } from "../utils/constant";


const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    // fetchData

    useEffect(()=>{
        fetchData();

    },[]);
    const fetchData = async () => {
        const data = await fetch(RESID_LINK+resId);
        const json = await data.json();
        setResInfo(json?.data);

    };
    return resInfo;
};

export default useRestaurantMenu;