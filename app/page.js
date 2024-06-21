'use client'

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { documents } from "@/lib/docs";
import { getDocumentIds } from "@/lib/rules";

export default function Home() {
  const [reqDocs, setReqDocs] = useState([]);
  const [formState, setFormState] = useState({
    flag: null,
    vesselGT: 0,
    vesselKw: 0,
    safehaven: 0, // initialize as number
    rank: null
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: parseInt(value) // ensure values are parsed as integers
    }));
  };

  useEffect(() => {
    const docs = getDocumentIds(formState);
    setReqDocs(docs);
  }, [formState]);

  const filteredDocs = documents.filter(doc => reqDocs.includes(doc.id));

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative h-screen ">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="relative">
        <Header />
        <div className="w-full bg-red-300 p-4">
          <button className="btn btn-outline" onClick={toggleSidebar}>Filters</button>
        </div>
        <main className="p-10">
          <h2>MLC Checker</h2>
          <div className="space-y-5">
            <div className="bg-slate-200 border-1 rounded p-7">
              <form className="space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="rank">Rank</label>
                  <select
                    name="rank"
                    id="rank"
                    className="select select-bordered w-full max-w-xs"
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
                <div className="flex flex-col space-y-3">
                  <label htmlFor="vesselGT">Vessel Tonnage (Gross Tonnage)</label>
                  <input
                    type="range"
                    name="vesselGT"
                    id="vesselGT"
                    min="0"
                    max="501"
                    value={formState.vesselGT}
                    className="slider"
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
                    className="slider"
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
                    className="slider"
                    onChange={handleInputChange}
                  />
                  <span>{formState.safehaven > 150 ? ("150+") : (formState.safehaven)} Miles</span>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="flag">Flag</label>
                  <select
                    name="flag"
                    id="flag"
                    className="select select-bordered w-full max-w-xs"
                    onChange={handleInputChange}
                  >
                    <option disabled>Please select</option>
                    <option value="0">Cayman</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="bg-slate-200 border-1 rounded">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* Table Contents */}
                  <thead>
                    <tr>
                      <th>Qualification</th>
                      <th>Type</th>
                      <th>Valid for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocs.map((doc) => (
                      <tr key={doc.id}>
                        <td>{doc.name}</td>
                        <td>{doc.type}</td>
                        <td>{doc.validFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
}
