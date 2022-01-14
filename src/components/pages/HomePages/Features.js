import React from "react";
import Footer from "../../common/footer";
import Sidebar from "./Sidebar";
import Header from "../../common/Header";

const Features = () => {
    return (
        <div>
            <Header />
            <div className="global-body">
                <Sidebar />
                <div>
                    <h1>COOL FEATURES COMING SOON</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Features;
