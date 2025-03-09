import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const navigate = useNavigate(); 

    const { _id, name, chef, category, taste, detail, supplier, photo } = coffee;

    const handleUpdateCoffee = async (event) => {
        event.preventDefault();

        const form = event.target;

        // Collect form data
        const updatedCoffee = {
            name: form.name.value.trim(),
            chef: form.chef.value.trim(),
            category: form.category.value.trim(),
            taste: form.taste.value.trim(),
            detail: form.detail.value.trim(),
            supplier: form.supplier.value.trim(),
            photo: form.photo.value.trim(),
        };

        // Ensure all fields are filled
        if (Object.values(updatedCoffee).some(value => value === "")) {
            Swal.fire({
                title: "Error",
                text: "All fields are required!",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/coffee/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCoffee),
            });

            const data = await response.json();
            console.log("Update Response:", data);

            if (data.modifiedCount > 0 || data.acknowledged) {
                Swal.fire({
                    title: "Success",
                    text: "Coffee updated successfully!",
                    icon: "success",
                    confirmButtonText: "Cool",
                }).then(() => {
                    navigate("/"); 
                });
            } else {
                Swal.fire({
                    title: "No Changes",
                    text: "No changes were made to the coffee data.",
                    icon: "info",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: "Error",
                text: "Failed to update coffee. Please try again!",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="mx-auto max-w-11/12 border-2 border-red-500">
            <div className="bg-[#F4F3F0]">
                <h1 className="text-center font-bold text-3xl mb-4 text-gray-800">
                    Update Coffee
                </h1>

                <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mb-4">
                    <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Coffee Name</label>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Chef</label>
                            <input type="text" placeholder="Enter coffee chef" name="chef" defaultValue={chef} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Supplier</label>
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" defaultValue={supplier} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Taste</label>
                            <input type="text" placeholder="Enter coffee taste" name="taste" defaultValue={taste} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Category</label>
                            <input type="text" placeholder="Enter coffee category" name="category" defaultValue={category} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-medium">Details</label>
                            <input type="text" placeholder="Enter coffee details" name="detail" defaultValue={detail} className="w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium">Photo</label>
                            <input type="text" placeholder="Enter photo URL" name="photo" defaultValue={photo} className="w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2 flex justify-center">
                            <input className="btn btn-success" type="submit" value="Update Coffee" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;
