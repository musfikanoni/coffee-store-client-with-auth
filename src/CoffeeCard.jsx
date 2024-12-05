
const CoffeeCard = ({ coffee }) => {

    const {name, quantity, supplier,taste, category, details, photo} = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} />
            </figure>
            <div className="flex justify-between items-center w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>

                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">edit</button>
                        <button className="btn join-item">x</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard; 