import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/style.css'
import Form from './Form';
import Seat from './Seat';
import Table from './Table';

export default class SeatSelection extends Component {
  render() {
    return (
        <div className="container-fluid pageContainer">
        <h3 className='title'>MOVIE SEAT SELECTION</h3>
        <div className='pageContent'>
            <Form />
            <ul className='colorSample'>
                <li className='greenBox'>Selected Seat</li>
                <li className='redBox'>Reserved Seat</li>
                <li className='emptyBox'>Empty Seat</li>
            </ul>
            <p id="notification" style={{textAlign: 'center'}}><b style={{marginBottom: 0, background: '#ff9800', letterSpacing: 1}}>{this.props.message}</b></p>
            <Seat />
            <Table />
        </div>
        <div className='footer'>© 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts</div>
    </div>
    )
  }
}
