import React, { Component } from 'react';


export default class Invoices extends Component {

    constructor(props) {
      super(props);
  
      this.createInvoice = this.createInvoice.bind(this);
    }

    delete(key) {
      this.props.delete(key);
    }

    createInvoice(item) {
        return <li onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}{' '}{'$'}{item.number}</li>
        
      }
     
      render() {
        var invoiceEntries = this.props.entries;
        var listItems = invoiceEntries.map(this.createInvoice);
     
        return (
          <ol className="invoice_list">
              {listItems}
          </ol>
        );
      }
    };
  