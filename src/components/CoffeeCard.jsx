import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [loading, setLoading] = useState(false);


  const viewDetails = (coffee) => {
    setLoading(true);
    setSelectedCoffee(coffee);

    // Simulate loading delay (optional) for showing loader effect
    setTimeout(() => {
      document.getElementById("my_modal_4").showModal();
      setLoading(false); // Stop loader when modal opens
    }, 500);
  }

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
            Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success"
          });
          const remainingCoffees = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remainingCoffees); // Update the coffees state
            }
        })
        }
      });
  }

  return (
    <>
      <div
        key={coffee._id}
        className="flex justify-around items-center border rounded-md py-5"
        style={{ backgroundColor: "#ECEAE3" }}
      >
        <div>
          <img src={coffee.photo} alt="" className="w-[150px] h-[200px]" />
        </div>
        <div>
          <p className="text-xl leading-10">
            <strong>Name:</strong>{" "}
            <span style={{ color: "#5C5B5B" }}> {coffee.name}</span>
          </p>
          <p className="text-xl leading-10">
            <strong>Chef:</strong>{" "}
            <span style={{ color: "#5C5B5B" }}>{coffee.chef}</span>{" "}
          </p>
          <p className="text-xl leading-10">
            <strong>Category:</strong>{" "}
            <span style={{ color: "#5C5B5B" }}>{coffee.category}</span>{" "}
          </p>
          <p className="text-xl leading-10">
            <strong>Price:</strong>{" "}
            <span style={{ color: "#5C5B5B" }}>{coffee.price} Taka</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="btn text-xl text-white bg-orange-300"
            style={{ width: "50px", height: "50px" }}
            onClick={() => viewDetails(coffee)}
          >
            <MdOutlineRemoveRedEye />
          </button>
            <Link to={`updateCoffee/${coffee._id}`}>
            <button
            className="btn  text-xl text-white bg-stone-700"
            style={{ width: "50px", height: "50px" }}
            
          >
            <MdEdit />
          </button>
            </Link>
          <button
            className="btn  text-xl text-white bg-red-400"
            style={{ width: "50px", height: "50px" }}
            onClick={()=> handleDelete(coffee._id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
      {selectedCoffee && (
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-10/12 max-w-5xl">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="loader"></div> {/* Simple loader spinner */}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="mx-auto">
                  <img src={selectedCoffee.photo} alt={selectedCoffee.name} />
                </div>
                <div>
                  <p className="text-xl leading-10">
                    <strong>Name:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.name}
                    </span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Price:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.price} Taka
                    </span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Chef:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.chef} 
                    </span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Supplier:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.supplier}
                    </span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Taste:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.taste}
                    </span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Category:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.category}
                    </span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Details:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>
                      {selectedCoffee.details}
                    </span>{" "}
                  </p>
                </div>
              </div>
            )}

            <div className="modal-action flex-none">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn bg-orange-300 text-lg">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

CoffeeCard.propTypes = {};

export default CoffeeCard;
