'use client'

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import CardContainer from "@/components/CardContainer";
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

  const handleReset = () => {
    setFormState({
      flag: null,
      vesselGT: 0,
      vesselKw: 0,
      safehaven: 0,
      rank: null
    });
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
    <div className="relative bg-base-1 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        handleInputChange={handleInputChange}
        formState={formState}
        handleReset={handleReset}
      />

      {/* Main Content */}
      <div className="relative p-5">
        <Header />
        <div className="w-full py-4 pl-8">
          <button className="btn btn-outline font-bold" onClick={toggleSidebar}>Filters <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4" stroke="currentColor"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg></button>
        </div>
        <main>
          <div className="space-y-5">
            <CardContainer filteredDocs={filteredDocs} />
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
