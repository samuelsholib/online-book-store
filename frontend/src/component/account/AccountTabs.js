import React, { useState, } from 'react';
import {Container, Tabs, Tab} from "react-bootstrap";
import OrderHistory from "./OrderHistory";
import AccountPage from './AccountPage';
import EditAccount from './EditAccount';

function AccountTabs() {

    const [key, setKey] = useState('account');

    return (
        <Container className="navoffset">
            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey='account' title='Account' tabClassName="tabs">
                    <AccountPage />
                </Tab>
                <Tab eventKey='edit' title='Edit Account' tabClassName="tabs">
                    <EditAccount setKey={setKey}/>
                </Tab>
                <Tab eventKey='orders' title='Order History' tabClassName="tabs">
                    <OrderHistory />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default AccountTabs;