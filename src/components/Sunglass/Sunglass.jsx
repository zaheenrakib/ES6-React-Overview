// import add from '../../Utilits/calculate';
import { add, multiply,divideTheFirstNumberByTheSecondNumber as divide } from '../../Utilits/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';
const Sunglass = () => {


    const first = 55;
    const second = 199;
    const sum = add(first,second);
    const mult = multiply(first,second);
    const vaagg = divide(first , second);



    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;