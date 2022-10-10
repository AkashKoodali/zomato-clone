import React from "react";
// import Navbar from '../components/Navbar';
// import FootTab from '../components/FootTab'

const HomepageLayout =
  (Component) =>

  ({ ...props }) => {
    return <>
    {/* <Navbar/>
    <FootTab/> */}
    <div className="container mx-auto px-4 lg:px-20">
      <Component {...props}/>
    </div>
    </>;
  };

export default HomepageLayout;
