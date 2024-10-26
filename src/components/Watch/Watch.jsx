import './Watch.css'
const Watch = ({ watch }) => {
    const { brand, price } = watch;
    return (
        <div>
            <h2>Watch Name: {brand}</h2>
            <h3>Watch Price: {price}</h3>
        </div>
    );
};

export default Watch;