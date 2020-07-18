import React, { Component } from 'react';
import getState from './flux';


export const Context = React.createContext(null);

const injectContext= PassedComponent =>{
    class StoreWrapper extends Component{
        constructor(props){
            super(props);
            this.state =getState({
                getStore:()=>this.state.store,
                getActions:()=> this.state.actions,
                setStore: updateStore=> this.setState({
                    store:Object.assign(this.state.store,updateStore),
                    actions:{...this.state.acttions}
                })
            })
        }
        componentDidMount(){
            
            this.state.actions.getDataUsers('https://reqres.in/api/users');
            this.state.actions.getDataPosts('https://reqres.in/api/unknown');
            this.state.actions.getDataHotels('https://5f10909100d4ab0016135091.mockapi.io/hotels');
        }
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props}/>
                </Context.Provider>
            )
        }
    }
    return StoreWrapper;
}
export default injectContext;