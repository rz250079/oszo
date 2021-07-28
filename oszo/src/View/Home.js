
import { useRedux } from 'Hooks/useRedux';
import { getReceipt, postReceipt } from 'State/receipt';


const Home = () => {
    const receipt = useRedux('receipt', getReceipt);
    
    const handleAdd = () => {
        receipt.dispatch(postReceipt);
    }

    const renderList = () => {
        return receipt.data.map(i => {
            return <h3 key={i}>{i}</h3>
        })
    }

    return receipt.render(() => {
            return (
                <div>
                    <h2 onClick={handleAdd}>home</h2>
                    {renderList()}
                </div>
            )
        })
    
}

export default Home;