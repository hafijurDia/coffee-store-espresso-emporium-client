import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GoArrowLeft } from "react-icons/go";


const UpdateCoffee = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component loads
      }, []);

    const coffee = useLoaderData();
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const updatedCoffee = {name, price, chef, supplier, taste, category, details, photo};
    console.log(name, chef, supplier, taste, category, details, photo);

    //send data to the server
    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
            // Check if data is received correctly
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Coffee updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
            form.reset();
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to update coffee',
              icon: 'error',
              confirmButtonText: 'Try Again',
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        });
    }



    return (
        <div className="container mx-auto px-4">
   <Link to="/"><button className="btn mt-5 bg-orange-300 text-base mb-8"><GoArrowLeft /> Back to home</button></Link>

      <form onSubmit={handleUpdateCoffee}  className="p-14 border rounded" style={{backgroundColor:"#F4F3F0"}}>
      <h1 className="text-4xl text-black text-center">Update Coffee</h1>
      <p className="text-gray-600 text-lg leading-normal my-5 text-center mx-auto w-full md:w-1/2">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
        <div className="grid md:grid-cols-2 gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={coffee.name}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              name="price"
              defaultValue={coffee.price}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Chef</span>
            </div>
            <input
              type="text"
              name="chef"
              defaultValue={coffee.chef}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={coffee.supplier}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              defaultValue={coffee.taste}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={coffee.category}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={coffee.details}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              name="photo"
              defaultValue={coffee.photo}
              className="input input-bordered w-full"
            />
          </label>
          <button type="submit" className="btn btn-block md:col-span-2 bg-orange-300 text-lg">
            Update Coffee
          </button>
        </div>
      </form>
    </div>
    );
};


UpdateCoffee.propTypes = {

};


export default UpdateCoffee;
