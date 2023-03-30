import React from "react";

function footer(){
    const currentyear = new Date().getFullYear();
    return (<footer>
        © Aryan S. {currentyear}
        </footer>);
};

export default footer;