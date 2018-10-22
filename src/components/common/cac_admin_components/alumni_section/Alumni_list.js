import React from "react";
import {connect} from "react-redux"
const alumni_list = props=>{
  return <div>Alumni list
    {props.list? <ul>{props.list.map(element => <AlumniInfo {...element} />)}</ul>:null}
  </div>
}
const mapStateToProps = state=>{
  return {list:state.cac_admin_reducer.all_alumni}
}
export const AlumniList = connect(mapStateToProps)(alumni_list)

const AlumniInfo = props =>{
  return (
    <li>
      {props.name}{props.surename}{props._id}{props.email}{props.black_list}{props.following}{props.high_school}{props.higher_privacy}{props.id}{props.password}{props.private}{props.status}{props.usertype}
    </li>
  )
}
