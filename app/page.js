"use client"

import { useState, useEffect } from "react";
import { rules } from "@/lib/rules";
import { documents } from "@/lib/docs";

export default function Home() {
  const [reqDocs, setReqDocs] = useState([]);
  const [formState, setFormState] = useState({
    flag: "",
    vesselGT: "",
    vesselKw: "",
    safehaven:"",
    rank: ""
  });
  

  const checkConditions = (conditions, formState) => {
    return Object.keys(conditions).every(key => conditions[key] === formState[key]);
  };

  const handleUpdateList = () => {
    let newReqDocs = [];

    rules.forEach(rule => {
      if (checkConditions(rule.conditions, formState)) {
        newReqDocs = [
          ...newReqDocs,
          ...rule.documentIds.map(id => documents.find(doc => doc.id === id))
        ];
      }
    });

    setReqDocs(newReqDocs);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    handleUpdateList();
  }, [formState]);

  return (
    <main className="p-10">
      <h2>MLC Checker</h2>
      <div className="space-y-5">
        <div className="bg-slate-200 border-1 rounded p-7">
          <form className="space-y-3">
            <div>
              <select
                name="flag"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option disabled selected>Flag</option>
                <option value="cayman">Cayman</option>
              </select>
            </div>
            <div className="sm:space-x-2 space-y-3">
              <select
                name="vesselGT"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option disabled selected>Vessel GT</option>
                <option value="200">Less than 200GT</option>
                <option value="500">Less than 500GT</option>
                <option value="500GT+">Over 500GT</option>
              </select>
              <select
                name="vesselKw"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option disabled selected>Vessel Kw</option>
                <option value="3000">3000Kw</option>
                <option value="6000">6000Kw</option>
              </select>
              <select
                name="safehaven"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option disabled selected>Distance from safehaven</option>
                <option value="60">Up to 60 Miles</option>
                <option value="150">Less than 150 Miles</option>
                <option value="150+">Greater than 150 miles</option>
              </select>
            </div>
            <div>
              <select
                name="rank"
                className="select select-bordered w-full max-w-xs"
                onChange={handleSelectChange}
              >
                <option disabled selected>Rank</option>
                <option value="0">Captain</option>
                <option value="1">Chief Officer</option>
                <option value="2">Bosun & Deckhand</option>
                <option value="3">Chief Engineer</option>
                <option value="4">2nd Engineer</option>
                <option value="5">Stewardess</option>
                <option value="6">Chef</option>
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
                  <th>Valid for</th>
                </tr>
              </thead>
              <tbody>
                {reqDocs.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.name}</td>
                    <td>{doc.validfor}</td>
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
