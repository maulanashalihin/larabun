class Route {
    
    _routes: any;

    constructor() {
        this._routes = {};
    }
    get(uri : string, action : any) {
        
        this._routes["GET:"+uri] = action;
    }
    post(uri : string, action : any) {

        this._routes["POST:"+uri] = action;
    }
    routes() {
        return this._routes;
    }

    use(request : any)
    { 
        const { pathname } = new URL(request.url)

        let method = request.method; 

        if(this._routes[method+":"+pathname])
        {
            return this._routes[method+":"+pathname](request);
        }
          
    }
}
export default new Route();