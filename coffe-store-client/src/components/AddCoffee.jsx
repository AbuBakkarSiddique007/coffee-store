import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddNewCoffee = event => {
        event.preventDefault();

        const form = event.target;

        // Collect form data
        const name = form.name.value
        const chef = form.chef.value
        const category = form.category.value
        const taste = form.taste.value
        const detail = form.detail.value
        const supplier = form.supplier.value
        const photo = form.photo.value

        if (!name || !chef || !category || !taste || !detail || !supplier || !photo) {
            Swal.fire({
                title: 'Error',
                text: 'All fields are required!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        const newCoffee = { name, chef, category, taste, detail, supplier, photo };
        console.log(newCoffee);

        // Send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    form.reset(); 
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to add coffee. Please try again!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };


    return (
        <div className="mx-auto border-2 border-red-500">
            <div className="bg-[#F4F3F0]">
                <h1 className="text-center font-bold text-3xl mb-4 text-gray-800">
                    Add New Coffee
                </h1>
                <p className="text-lg text-center text-gray-600 leading-relaxed mb-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    <br />
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here."
                </p>

                <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mb-4">
                    <form onSubmit={handleAddNewCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Coffee Name</label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Chef</label>
                            <input type="text" placeholder="Enter coffee chef" name="chef" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Supplier</label>
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Taste</label>
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Category</label>
                            <input type="text" placeholder="Enter coffee category" name="category" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Details</label>
                            <input type="text" placeholder="Enter coffee details" name="detail" className="w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium">Photo</label>
                            <input type="text" placeholder="Enter photo URL" name="photo" className="w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2 flex justify-center">
                            <input className="btn btn-success" type="submit" value="Add Coffee" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCoffee;