import React, { Component } from 'react';
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iregistrationuiservice from "../../uiservice/interface/iregistrationuiservice";
import axios from 'axios';
import TableRow from './TableRow';
import regmodel from "../../model/registrationmodel";


import {actionVariable} from '../../actions/actions';
import reducer from '../../reducers/reducers';
import store from '../../store/store'
import { connect } from 'react-redux';

@injectable()
 class Index extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {business: []};
      }
      componentDidMount(){
        debugger;
        let iregn = containerconfig.get<iregistrationuiservice>(TYPES.iregistrationuiservice);
        if(this.props.business.length==0)
        {
        iregn.getData()
             .then((response:any)=>{
            debugger;
            this.props.setData(response);
            // this.setState({business:response});
            console.log(this.state);
            }
        )
      }
      }
      tabRow(){
        // return this.state.business.map(function(object:any, i:any){
          return this.props.business.map(function(object:any, i:any){
          debugger;
            return <TableRow obj={object} key={i} />;
        });
      }
     
      render() {
        return (
          <div>
            <h3>Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Business</th>
                  <th>GST Number</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }
}
const mapStateToProp=(state:any)=>
      {
      return {  business:state.todoSmple.business||[]};
      }
      const   mapDispatchToProp=(dispatch:any)=>
      {
      return{
      setData:(business:any)=>
      {
      dispatch({type:actionVariable.SET_DATA,business})
      },
      removeData:()=>
      {
        dispatch({type:actionVariable.REMOVE_DATA})
      }
      };
      }
export default connect(mapStateToProp,mapDispatchToProp)(Index)