import React from 'react';
import {connect} from 'react-redux';
import {addNew} from '../Actions/operations';


class FormInput extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      ip : ''
    }
    this.myRef = React.createRef();
  }

  Inputhandler = (e) => {
    this.setState({
      ip : e.target.value
    })
  }

  componentDidMount(){
    this.myRef.current.focus()
  }


btnHandler = () => {
  this.props.dispatch(addNew(this.state))
  this.setState({ip:''})
}

  render () {
    return(
      <div>
        <input type='text' onChange={this.Inputhandler} ref={this.myRef} value={this.state.ip}/>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd : r => {
//       dispatch(addNew(r));
//     }
//   }
// }

const mapStateToProps=(state)=>{
    return {
      data : state.add
    }
}


export default connect(mapStateToProps,null)(FormInput);
