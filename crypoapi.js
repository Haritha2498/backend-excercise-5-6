async function fetchdata(url){
    try {
        const res=await fetch(url)
    const result=await res.json();
    const data=result.data[0];
    // console.log(result.main)
    console.log(data)
    } catch (error) {
        console.error("error")
    }
    // finally{
    //     console.log("completed")
    // }

}

fetchdata("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=0e3364a6-5f3b-49e8-b3ff-36dae710130f")