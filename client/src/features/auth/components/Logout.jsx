import "./Logout.css";
import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

function Logout() {
    const [open, setOpen] = useState(true)
        return(
            <Dialog className="relative z-10" open={open} onClose={setOpen}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
    
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-[#1F2025] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg- sm:mx-0 sm:h-10 sm:w-10">
                                    <QuestionMarkCircleIcon className="h-9 w-9 text-[#FAA307]" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle className="text-base text-2xl font-semibold leading-6 text-[#FAA307] pt-2">
                                        Log Out
                                    </DialogTitle>
                                    <div className="mt-5">
                                        <p className="text-md text-[#FFFFFF] pl-7">
                                            Are you sure you want to log out?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                id="logOutBtn"
                                className="inline-flex w-full justify-center rounded-md bg-[#FAA307] px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                                onClick={() => setOpen(false)}
                            >
                                Log Out
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen(false)}
                                data-autofocus
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );

}

export default Logout