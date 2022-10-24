import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUP = ({ isOpen, setIsOpen }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName:""
  });

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submit = () => {
    closeModal();
    setUserData({
      email: "",
      password: "",
      fullName: "",
    });
  };

  const googleSignUp = () =>
    (window.location.href = "https://localhost:4000/auth/google");

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2 flex flex-col gap-3 w-full">
                  <button
                    className="py-2 justify-center rounded-lg flex w-full items-center gap-2 
                  border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                    onClick={googleSignUp}
                  >
                    Sign Up With Google <FcGoogle />
                  </button>

                  <form action="" className="flex flex-col gap-2">
                  <div className="w-full flex flex-col gap-2">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="user@gmail.com"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="***********"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                      />
                    </div>
                    <div className="w-full text-center bg-zomato-400 text-white px-2 py-2 cursor-pointer rounded-lg" 
                    onClick={submit} type='submit'>
                        Sign Up
                    </div>
                  </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUP;
