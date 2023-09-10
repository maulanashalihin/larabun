import Route from "./index"

Route.get("/", () => {
 
    return Response.json({mantap : "mantap"})

}) 

export default Route;