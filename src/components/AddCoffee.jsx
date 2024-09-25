import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { GoArrowLeft } from "react-icons/go";

const AddCoffee = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component loads
  }, []);
  const handleAddCoffee = (event) => {
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
    const newCoffee = {name, price, chef, supplier, taste, category, details, photo};
    console.log(name, chef, supplier, taste, category, details, photo);


    //send data to the server
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
          // Check if data is received correctly
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to add coffee',
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
  };

  return (
    <div className="container mx-auto px-4">
    <Link to="/"><button className="btn mt-5 bg-orange-300 text-base mb-8"><GoArrowLeft /> Back to home</button></Link>
     
      <form onSubmit={handleAddCoffee} className="p-14 border rounded" style={{backgroundColor:"#F4F3F0"}}>
      <h1 className="text-4xl text-black text-center">Add New Coffee</h1>
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
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Chef</span>
            </div>
            <input
              type="text"
              name="chef"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </label>
          <button type="submit" className="btn btn-block md:col-span-2 text-lg bg-orange-300">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

AddCoffee.propTypes = {};

export default AddCoffee;
