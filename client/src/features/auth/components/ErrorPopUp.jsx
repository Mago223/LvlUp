import "../styles/ErrorPopup.css";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function ErrorPopup({ open, setOpen, message }) {
    return (
        <Dialog className="relative z-10" open={open} onClose={() => setOpen(false)}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-[#1F2025] text-left shadow-xl transition-all"
                    >
                        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle className="text-lg leading-6 font-medium text-white">
                                        Error
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-white">
                                            {message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-600 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

ErrorPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default ErrorPopup;
