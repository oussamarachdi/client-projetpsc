import React from "react";
import "../Styles/Test.css";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    test
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    test
                    
                </div>
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    className="item3"
                >
                    test
                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >
                    test
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    test
                </a>

                {false && test}
            </div>
        </footer>
    );
};

export default Footer;