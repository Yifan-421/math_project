import { MathApi } from "./mathApi"

const mathApi = new MathApi();
const result = mathApi.calculate("simplify", "x^4+3*x^4");

alert(result);
