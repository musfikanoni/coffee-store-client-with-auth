import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier,taste, category, details, photo} = coffee;


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier,taste, category, details, photo}
        console.log(newCoffee);

        //send date to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        });
    }

    return (
        <div>
            <div className='w-9/12 mx-auto'>
                <h1 className='text-3xl font-bold'>UpdateCoffee: {name}</h1>
                <form onSubmit={handleUpdateCoffee} className='bg-slate-100 flex justify-center'>
                    <div>
                        {/* name quantity */}
                    <div className="flex gap-10 ">
                        <span className='py-8'>
                            <h2>Name</h2>
                            <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered lg:w-[500px] " />
                        </span>
                        <span className='py-8'>
                            <h2>Coffee Quantity</h2>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter Quantity" className="input input-bordered lg:w-[500px] " />
                        </span>
                    </div>
                    {/* supplier & test */}
                    <div className="flex gap-10 ">
                        <span className='py-8'>
                            <h2>Supplier</h2>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier" className="input input-bordered lg:w-[500px] " />
                        </span>
                        <span className='py-8'>
                            <h2>Taste</h2>
                            <input type="text" name='taste' defaultValue={taste} placeholder="Coffee Chef" className="input input-bordered lg:w-[500px] " />
                        </span>
                    </div>
                    {/* category and details */}
                    <div className="flex gap-10">
                        <span>
                            <h2>Category</h2>
                            <input type="text" name='category' defaultValue={category} placeholder="Coffee Category" className="input input-bordered lg:w-[500px]" />
                        </span>
                        <span>
                            <h2>Details</h2>
                            <input type="text" name='details' defaultValue={details} placeholder="Enter Coffee Quantity" className="input input-bordered lg:w-[500px]" />
                        </span>

                    </div>
                        <div className='pt-5 pb-5'>
                            <h2>Photo</h2>
                            <input type="text" name='photo' defaultValue={photo} placeholder="Enter photo url" className="input input-bordered lg:w-[1040px]" />
                        </div>
                        <input type="submit" className='border border-[#331A15] text-[#331A15] bg-[#D2B48C] btn btn-block mb-10' value="Update Coffee" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;