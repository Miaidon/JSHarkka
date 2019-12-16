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
    const {name, value} = event.target
    this.setState({
        [name]: value,
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
            onChange={this.handleChange} /> <br/>
        <label>Lasku</label>
        <input 
            type="text"
            name="lasku"
            value={lasku}
            onChange={this.handleChange} /> <br/>
            <label>Päivämäärä</label>
        <input 
            type="text"
            name="pvmaara"
            value={pvmaara}
            onChange={this.handleChange} /> <br/>
        <label>Summa</label>
        <input 
            type="text"
            name="summa"
            value={summa}
            onChange={this.handleChange} /> <br/>
        <input type="button" value="Lähetä" onClick={this.submitForm} />
    </form>
  );
 }
 submitForm = () => {
     this.props.handleSubmit(this.state)
     this.setState(this.initialState)      
 }
 
}
export default Form;