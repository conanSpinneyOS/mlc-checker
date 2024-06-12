'use client'

import { useState, useEffect } from "react";
import { documents } from "@/lib/docs";
import { getDocumentIds } from "@/lib/rules";

export default function Home() {
  const [reqDocs, setReqDocs] = useState([]);
  const [formState, setFormState] = useState({
    flag: null,
    vesselGT: null,
    vesselKw: null,
    safehaven: null,
    rank: null
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: parseInt(value)
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
                onChange={handleSelectChange}
              >
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
              <label htmlFor="vesselGT">Vessel GT</label>
              <select
                name="vesselGT"
                id="vesselGT"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option value="0">Less than 200GT</option>
                <option value="1">Less than 500GT</option>
                <option value="2">Over 500GT</option>
              </select>
              <label htmlFor="vesselKw">Vessel Kw</label>
              <select
                name="vesselKw"
                id="vesselKw"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option value="0">Less than 3000Kw</option>
                <option value="1">Less than 6000Kw</option>
                <option value="2">More than 6000Kw</option>
              </select>
              <label htmlFor="safehaven">Distance from safehaven</label>
              <select
                name="safehaven"
                id="safehaven"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option value="0">Up to 60 Miles</option>
                <option value="1">Less than 150 Miles</option>
                <option value="2">Greater than 150 miles</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="flag">Flag</label>
              <select
                name="flag"
                id="flag"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
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
