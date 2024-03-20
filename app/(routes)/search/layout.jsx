// import React, { useEffect,useState } from "react";
import CategoryList from "./_components/CategoryList";

const layout = ({ children }) => {
  


  return (
    <div className="grid grid-cols-4 ">
      <div className="hidden md:block">
        {/* category */}
      <CategoryList />
      </div>
      <div className="col-span-4 md:col-span-3 ">
        {/* chidlren */}
        {children}
      </div>
    </div>
  );
};

export default layout;
