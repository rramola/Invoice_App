import React, { Component } from 'react';

import Invoices from './invoices';

export default class InvoiceCreation extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items:[]
    };
    
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);



  }

  addItem(e) {
    if (this._inputDescription.value, this._inputAmount.value !== '') {
      var newItem = {
        text: this._inputDescription.value,
        number: this._inputAmount.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputDescription.value='';
      this._inputAmount.value='';

   }


  console.log(this.state.items);

  e.preventDefault();
 }

 deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}

  render(e) {
    return (
      <div className='create_invoice_content_wrapper'>
          <form >
              <h1>Create New Invoice</h1>
              <h4>To delete an item, simply click on the item you wish to be deleted. </h4>
                <div className='invoice_creation_widget_wrapper'>
                  <form onSubmit={this.addItem}>
                  <input type='text'  id='invoice_description' ref={ (a) => this._inputDescription = a} placeholder='description'></input>
                  <input type='float'  id='invoice_amount' ref={ (a) => this._inputAmount = a} placeholder='amount'></input>
                  <button id='invoice_item' type='submit'>Submit Item</button>
                  </form>
                </div>
                <Invoices entries={this.state.items}
                          delete={this.deleteItem} />
            <button id='invoice' type='submit'>Submit Invoice</button>
          </form>
      </div>


    );
  }
}