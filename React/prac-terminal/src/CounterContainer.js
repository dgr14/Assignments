import React, { Component } from 'react'

class CounterContainer extends Component {
        constructor(props){

            this.state = {
                counter: props.defaultCounter
            }
        }

    handleIncrement = (amount) => {
        this.setState(prevState => {
            return { counter: prevState.counter + amount }
        })
    }
    handleDecrement = (amount) => {
        this.setState(prevState => {
            return { counter: prevState.counter - amount}
        })
    }
    render(){
        const styles = {
            display: 'grid',
            fontSize: '30px',
            width: '30%',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            margin: 'auto',
            textAlign: 'center'
        }

        return (
            <div style = { stlyes }>
            <span onClick={()=>this.handleDecrement(10)}>-10</span>
                <span onClick={()=>this.handleDecrement(1)}>-</span>
                <span>{ this.state.counter }</span>
                <span onClick={()=>this.handleIncrement(1)}>+</span>    
                <span onClick={()=>this.handleIncrement(10)}>+10</span>
            </div>
        )
    }
    
}
export default CounterContainer