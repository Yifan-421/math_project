import { simplify } from "mathjs"


class MathApi {

    baseURL = "https://newton.now.sh/api/v2/"
    calculate(operation, expression){
        //TODO
        // 1. Check that operation is correct
        // 2. Send the request

        switch(operation){
            case 'simplify':
               return simplify(expression).toString();
            default:
                return undefined;
        }
 
      
        // Add error handling
        // 3. Parse the results and handle errors
        
    }

}

export {MathApi}