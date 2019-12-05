import React from 'react';
import {connect} from 'react-redux';
import {addNew} from '../Actions/operations';


class FormInput extends React.Component {
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


btnHandler = () => {
  this.props.onAdd(this.state)
  this.setState({ip:''})
}

  render () {
    return(
      <div>
        <input type='text' onChange={this.Inputhandler}  value={this.state.ip}/>
        <button onClick={this.btnHandler}>Submit</button>
        {
          this.props.data.map(item => {
            return <h1>{item.ip}</h1>
          })

        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd : r => {
      dispatch(addNew(r));
    }
  }
}

const mapStateToProps=(state)=>{
    return {
      data : state.add
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FormInput);
