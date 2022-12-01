import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props){
        super()
    }
    state={
        entDisponibles: 150,
        disponible: true
    }
    comprarBoleta= async ()=>{
        await this.setState({
            entDisponibles: this.state.entDisponibles -1                     
        })
        if (this.state.entDisponibles===0) {
            await this.setState({
                disponible: false
            })
        }
    }
  render() {
    return (
      <div>
        <h3>{this.props.nombre}</h3>
        <img src={this.props.imglink} alt={this.props.nombre} srcset="" />
        <button>Comprar Entrada</button>
      </div>
    )
  }
}
