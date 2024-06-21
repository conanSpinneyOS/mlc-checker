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
        <div className="w-full py-4">
          <button className="btn btn-outline" onClick={toggleSidebar}>Filters</button>
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
