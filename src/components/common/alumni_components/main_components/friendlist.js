import React from "react";
import { connect } from "react-redux";

const body = props =>{
  return <div>FriendList</div>
}
const mapStateToProps = state => {

}

export const FriendList =  connect(mapStateToProps)(body);
