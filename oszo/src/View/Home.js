
import { useRedux } from 'Hooks/useRedux';
import { getReceipt } from 'State/receipt';


const Home = () => {
    const receipt = useRedux('receipt', getReceipt);
    
    if(receipt.render) {
        return receipt.render;
    }
    console.log(receipt);
    return (
        <div>
            <h2>home</h2>
        </div>
    )
    
}

export default Home;