import React from "react";
import { CDBIcon, CDBContainer } from "cdbreact";

export const Icon = () => {
    return (
        <CDBContainer>
            <CDBIcon fab spin icon="stack-overflow" />
            <CDBIcon fab spin icon="facebook" />
            <CDBIcon fab spin icon="reddit" />
            <CDBIcon fab spin icon="twitter" />
            <CDBIcon fab spin icon="instagram" />
            <CDBIcon fab spin icon="google" />
        </CDBContainer>
    );
};
