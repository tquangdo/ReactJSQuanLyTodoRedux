import React from 'react'
import Title from './Title'
import Control from './Control'
import Form from './Form'
import List from './List'
//Redux
import { connect } from 'react-redux'
import { actionResetMang } from '../../redux/actions/Action'

class NgoaiCung extends React.Component {
  UNSAFE_componentWillMount() {
    let { dispatch } = this.props
    dispatch(actionResetMang())
  }
  render() {
    // Ẩn/Hiện mục thêm task
    var domForm = null
    if (this.props.reduxprop_anHienForm) {
      domForm = (<Form></Form>)
    }
    return (
      <div>
        <Title></Title>
        <Control></Control>
        {domForm}
        <List></List>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    reduxprop_anHienForm: state.reducerAnHienForm
  }
})(NgoaiCung)
// var mapState2Props = (state) => {
//   return {
//     reduxprop_isAdding: state.reducerToggleAdding
//   }
// }
// var mapDispatch2Props = (dispatch, props) => {
//   return {
//     dispatchActionAddItem: (item_arg) => {
//       dispatch(actionAddItem(item_arg))
//     },
//     dispatchActionToggle: () => {
//       dispatch(actionToggle())
//     }
//   }
// }

// export default connect(mapState2Props, mapDispatch2Props)(NoteForm)