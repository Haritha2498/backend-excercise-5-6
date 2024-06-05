async function fetchdata(url){
    try {
        const res=await fetch(url);
    const result=await res.json();
    console.log(result);
    } catch (error) {
        console.error(error)
    }
    // finally{
    //     console.log("completed")
    // }
    
}


fetchdata("https://api.nasa.gov/planetary/earth/assets?lon=76.5&lat=10&date=2018-01-01&dim=0.10&api_key=Hg7QuCnSrEM8IMu91FInanhELePfs9Vd84YfL8cA")