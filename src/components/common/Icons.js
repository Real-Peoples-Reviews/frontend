import React from "react";
import { CDBBtn, CDBIcon, CDBContainer } from "cdbreact";
export const Icon = () => {
    return (
        <CDBContainer>
            <CDBBtn color="primary">
                <CDBIcon fab icon="stack-overflow" />
                click me
            </CDBBtn>
            <CDBBtn color="secondary">
                <CDBIcon fab icon="facebook" />
                click me
            </CDBBtn>
            <CDBBtn color="success">
                <CDBIcon fab icon="reddit" />
                click me
            </CDBBtn>
            <CDBBtn color="danger">
                <CDBIcon fab icon="twitter" />
                click me
            </CDBBtn>
            <CDBBtn color="dark">
                <CDBIcon fab icon="instagram" />
                click me
            </CDBBtn>
            <CDBBtn color="warning">
                <CDBIcon fab icon="google" />
                click me
            </CDBBtn>
        </CDBContainer>
    );
};
