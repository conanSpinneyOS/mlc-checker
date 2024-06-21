// components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen, onClose, handleInputChange, formState, handleReset }) => {
    return (
        <div className={`rounded-2xl fixed top-0 left-0 w-11/12 sm:w-96 h-full bg-slate-100 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close button */}
            {/* Close button */}
            <div className="absolute top-2 right-10 mt-4 space-x-3 align-baseline">
                <button
                    onClick={onClose}
                    className="py-2"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            {/* Scrollable content */}
            <div className="h-full overflow-y-auto">
                <div className="p-5 mt-10">
                    <form className="space-y-3">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="rank" className="font-bold">Rank</label>
                            <select
                                name="rank"
                                id="rank"
                                className="select select-bordered w-full max-w-xs"
                                value={formState.rank}
                                onChange={handleInputChange}
                            >
                                <option disabled>Please select</option>
                                <option value="0">Captain</option>
                                <option value="1">Chief Officer</option>
                                <option value="2">Bosun & Deckhand</option>
                                <option value="3">Chief Engineer</option>
                                <option value="4">2nd Engineer</option>
                                <option value="5">Stewardess</option>
                                <option value="6">Chef</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="flag" className="font-bold">Flag</label>
                            <select
                                name="flag"
                                id="flag"
                                className="select select-bordered w-full max-w-xs"
                                value={formState.flag}
                                onChange={handleInputChange}
                            >
                                <option disabled>Please select</option>
                                <option value="0">Cayman</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label htmlFor="vesselGT">Vessel Tonnage (Gross Tonnage)</label>
                            <input
                                type="range"
                                name="vesselGT"
                                id="vesselGT"
                                min="0"
                                max="501"
                                value={formState.vesselGT}
                                className="range"
                                onChange={handleInputChange}
                            />
                            <span>{formState.vesselGT > 500 ? ("500+") : (formState.vesselGT)} GT</span>
                            <label htmlFor="vesselKw">Vessel Engine Power (Kw)</label>
                            <input
                                type="range"
                                name="vesselKw"
                                id="vesselKw"
                                min="0"
                                max="6001"
                                value={formState.vesselKw}
                                className="range"
                                onChange={handleInputChange}
                            />
                            <span>{formState.vesselKw > 6000 ? ("6000+") : (formState.vesselKw)} KW</span>
                            <label htmlFor="safehaven">Distance from safehaven (Miles)</label>
                            <input
                                type="range"
                                name="safehaven"
                                id="safehaven"
                                min="0"
                                max="151"
                                value={formState.safehaven}
                                className="range"
                                onChange={handleInputChange}
                            />
                            <span>{formState.safehaven > 150 ? ("150+") : (formState.safehaven)} Miles</span>
                        </div>

                    </form>
                    {/* Reset button */}
                    <div className="flex justify-center pt-5">
                        <button
                            onClick={handleReset}
                            className="btn btn-error"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
