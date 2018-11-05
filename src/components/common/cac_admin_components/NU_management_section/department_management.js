import React from "react";

//make it via redux
export class DepartmentManagement extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log("loaded");
  }
  render(){
    return <div>
      <DepartmentInformation/>
      <CreateAdmin/>
      <CreateAlumni/>
    </div>
  }
}

const DepartmentInformation = props=>{
  return <div>There is a department information,# of students, # of department_administrators, # of graduated students</div>
}

const CreateAdmin = props =>{
  return <div>Create new department administrator</div>
}
const CreateAlumni = props =>{
  return <div>Create new alumni student </div>
}
