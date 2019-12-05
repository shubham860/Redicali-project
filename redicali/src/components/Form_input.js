import React from 'react';
import {connect} from 'react-redux';
import {addNew} from '../Actions/operations'


class Form_input extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      ip : ''
    }
  }

  Inputhandler = (e) => {
    this.setState({
      ip : e.target.value
    })
  }

componentDidMount(){
 console.log(this.props)
 this.props.dispatch(addNew())
}

  render () {
    return(
      <div>
        <input type='text' onChange={this.Inputhandler}  value={this.state.ip}/>
        <h1>{this.props.ip}</h1>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
    return{
        ip:state.ip
    }
}


export default connect(mapStateToProps)(Form_input);
