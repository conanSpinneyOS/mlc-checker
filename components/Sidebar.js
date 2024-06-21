// components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen, onClose, handleInputChange, formState, handleReset }) => {
    return (
        <div className={`rounded-2xl fixed top-0 left-0 w-11/12 sm:w-96 h-full bg-slate-100 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close button */}
            {/* Close button */}
            <div className="absolute top-2 right-10 mt-4 space-x-3 align-baseline">
                <button onClick={handleReset} className="">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5" stroke="currentColor"><path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg>
                </button>
                <button
                    onClick={onClose}
                    className="py-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6" stroke="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
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
                                <option defaultChecked>Please select</option>
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
                                <option defaultChecked>Please select</option>
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
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
