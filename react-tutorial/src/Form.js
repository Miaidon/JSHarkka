import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
    super(props)

    this.initialState = {
        nimi: '',
        lasku: '',
        pvmaara: '',
        summa: '',
    }

    this.state = this.initialState
  }

handleChange = event => {
    const {nimi, value} = event.target
    this.setState({
        [nimi]: value,
    })
}
render() {
   const {nimi, lasku, pvmaara, summa} = this.state;

return ( 
    <form>
        <label>Nimi</label>
            <input
            type="text"
            name="nimi"
            value={nimi}
            onChange={this.handleChange} />
        <label>Lasku</label>
        <input 
            type="text"
            name="lasku"
            value={lasku}
            onChange={this.handleChange} />
            <label>Päivämäärä</label>
        <input 
            type="text"
            name="pvmaara"
            value={pvmaara}
            onChange={this.handleChange} />
        <label>summa</label>
        <input 
            type="text"
            name="summa"
            value={summa}
            onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
    </form>
  );
 }
 submitForm = () => {
     this.props.handleSubmit(this.state)
     this.setState(this.initialState)      
 }
 
}
export default Form;