import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { LuCoffee } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const App = () => {

  const coffees = useLoaderData();
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [loading, setLoading] = useState(false);

  const viewDetails = (coffee) => {
    setLoading(true);
    setSelectedCoffee(coffee);

    
     // Simulate loading delay (optional) for showing loader effect
     setTimeout(() => {
      document.getElementById('my_modal_4').showModal();
      setLoading(false);  // Stop loader when modal opens
    }, 500);

  }

  return (
    <>
      {/* Hero section*/}
      <div className="hero-section">
        <div className="container mx-auto px-3">
          <div className="md:w-1/2 ml-auto py-32 lg:py-72 ">
            <h1 className="text-4xl sm:text-5xl text-white">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-white text-lg leading-normal my-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn border-0 text-2xl bg-orange-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* coffee card section*/}
      <div className="card-section" style={{ backgroundColor: "#ECEAE3" }}>
        <div className="container mx-auto md:flex gap-5 pt-10 pb-6">
          <div className="card">
            <div className="text-left pt-5 pl-5">
              <img src="https://i.ibb.co.com/C5Ptn4T/1.png" alt="Shoes" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-3xl" style={{ color: "#331A15" }}>
                Awesome Aroma
              </h2>
              <p className="text-lg" style={{ color: "#1B1A1A" }}>
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text-left pt-5 pl-5">
              <img src="https://i.ibb.co.com/NKhVThH/2.png" alt="Shoes" />
            </div>
            <div className="card-body ">
              <h2 className="card-title text-3xl" style={{ color: "#331A15" }}>
                High Quality
              </h2>
              <p className="text-lg" style={{ color: "#1B1A1A" }}>
                We served the coffee to you maintaining the best quality
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text-left pt-5 pl-5">
              <img src="https://i.ibb.co.com/BPD2fK3/3.png" alt="Shoes" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-3xl" style={{ color: "#331A15" }}>
                Pure Grades
              </h2>
              <p className="text-lg" style={{ color: "#1B1A1A" }}>
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
          </div>
          <div className="card">
            <div className="text-left pt-5 pl-5">
              <img src="https://i.ibb.co.com/d6ZfY2W/4.png" alt="Shoes" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-3xl" style={{ color: "#331A15" }}>
                Proper Roasting
              </h2>
              <p className="text-lg" style={{ color: "#1B1A1A" }}>
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* coffee section*/}
      <div className="coffee-section py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-xl" style={{ color: "#1B1A1A" }}>
              {" "}
              --- Sip & Savor ---{" "}
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold my-3"
              style={{ color: "#331A15" }}
            >
              Our Popular Products
            </h1>
            <Link to="/addCoffee"><button className="btn border-1 text-2xl bg-orange-300">
              Add Coffee <LuCoffee />
            </button></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            
            {
              coffees.map(coffee => <div 
                key={coffee._id}
                className="flex justify-around items-center border rounded-md py-5"
                style={{ backgroundColor: "#ECEAE3" }}>
                <div>
                  <img
                    src={coffee.photo}
                    alt=""
                    className="w-[150px] h-[200px]"
                  />
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
                    onClick={()=>viewDetails(coffee)}
                  >
                    <MdOutlineRemoveRedEye />
                  </button>
                  <button
                    className="btn  text-xl text-white bg-stone-700"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className="btn  text-xl text-white bg-red-400"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>)
            }


          </div>
            {
              selectedCoffee && (
                <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-10/12 max-w-5xl">

                {
                  loading ? (
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
                    <span style={{ color: "#5C5B5B" }}>{selectedCoffee.name}</span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Price:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>{selectedCoffee.price} Taka</span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Supplier:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>{selectedCoffee.supplier}</span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Taste:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>{selectedCoffee.taste}</span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Category:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>{selectedCoffee.category}</span>{" "}
                  </p>
                  <p className="text-xl leading-10">
                    <strong>Details:</strong>{" "}
                    <span style={{ color: "#5C5B5B" }}>{selectedCoffee.details}</span>{" "}
                  </p>
                  </div>
                </div>
                  )
                }
                  
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn bg-orange-300">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              )
            }

        </div>
      </div>
      {/* Follow on instagram*/}
      <div className="coffee-section">
        <div className="container mx-auto">
        <div className="text-center mb-10">
            <p className="text-xl" style={{ color: "#1B1A1A" }}>
            Follow Us Now
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold my-3"
              style={{ color: "#331A15" }}
            >
              Follow on Instagram
            </h1>
           
          </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div><img src="https://i.ibb.co.com/drpn9fp/Rectangle-13.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/FVsXJL1/Rectangle-12.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/drvN5B6/Rectangle-11.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/X7Sxpwp/Rectangle-10.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/7pt727t/Rectangle-9.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/QbTdrFf/Rectangle-16.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/nsvsH16/Rectangle-14.png" alt="" /></div>
              <div><img src="https://i.ibb.co.com/9w4Dkd8/Rectangle-15.png" alt="" /></div>
              
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
