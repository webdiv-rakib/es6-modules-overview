import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, divideTheFirstNumberByTheSecondNumber as divided, multiply } from '../../utils/calculate';
// import add from '../../utils/calculate';
const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const multi = multiply(first, second);
    const divide = divided(first, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;