import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    name = '';
    numberOfSeat = 0;
    render() {
        return (
            <>
                <h3 className='message'>Fill The Required Details Below And Select Your Seats</h3>
                <div className='pageContentForm'>
                    <div className='pageContentFormLeft'>
                        <label>Name <span>*</span></label><br />
                        <input disabled={this.props.disableform? 'disabled' : ''} name='name' onChange={(event) => {        
                            this.name = event.target.value
                        }} type="text" required />
                    </div>
                    <div className='pageContentFormRight'>
                        <label>Number of Seat <span>*</span></label><br />
                        <input disabled={this.props.disableform? 'disabled' : ''} name='numberOfSeat' onChange={(event) => {
                            let remainSeat = 120 - this.props.reservedSeats.length
                            if(event.target.value < 0){
                                event.target.value = 0
                            }else if(event.target.value > remainSeat){
                                event.target.value = remainSeat
                            }
                            this.numberOfSeat = event.target.value
                        }} type="number" required />
                    </div>
                </div>
                <button disabled={this.props.disableform? 'disabled' : ''} onClick={() =>{                
                    if(this.name === '' || this.numberOfSeat === 0){
                        alert("Hãy nhập đầy đủ thông tin!")
                    }
                    else{
                        let action = {
                            type: "START_SELECT",
                            name: this.name,
                            numberOfSeat: this.numberOfSeat
                        }
                        this.props.dispatch(action)
                    }            
                }}>Start Selecting</button>
            </>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        disableform : rootReducer.datVeReducer.disableform,
        reservedSeats: rootReducer.datVeReducer.reservedSeats
    }
    
}

export default connect(mapStateToProps)(Form)