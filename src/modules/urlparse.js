const url=require("url")
function parsearUrl(urlString){
    try
    {
        url1=new URL(urlString);
        url1={
            "host": url1.host,
            "pathname":url1.pathname,
            "parametros":url1.searchParams
        };
        return url1
    }catch(error)
    {
        console.log("no existe la url")
        url1=""
        return url1;
    }
}
module.exports=parsearUrl;