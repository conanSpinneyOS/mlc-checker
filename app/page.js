'use client'

import { useState, useEffect } from "react";
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

  return (
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
              {/* head */}
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
  );
}