import React, { Component } from 'react';


import Header from './header';
import InvoiceCreation from'./invoiceCreation';
import Invoice_db from './invoice_db';


export default class App extends Component {
  render() {
    return (
      <div className='content_wrapper'>
        <Header />
        <InvoiceCreation />
        <Invoice_db />
       {/* <h4>Insert components here.</h4> */}
      </div>
    );
  }
}
