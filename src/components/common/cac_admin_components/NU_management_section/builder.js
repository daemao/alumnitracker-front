import axios from "axios";
const get_schools_by_program = (program,jwt,next)=>{
  var headers = {};
  headers["x-auth"]=jwt;
  axios({
    method: 'get',
    url: `/nu_schools/get_schools_by_program/${program}`,
    headers:headers
  })
  .then(res=>{
    return next(null,res.data)
  }).catch(err=>{
    return next(err,null);
  })
}

const get_departments_by_school = (school,jwt,next)=>{
  var headers = {};
  headers["x-auth"]=jwt;
  axios({
    method: 'get',
    url: `nu_schools/get_school_departments/${school}`,
    headers:headers
  })
  .then(res=>{
    return next(null,res.data)
  }).catch(err=>{
    return next(err,null);
  })
}
export {get_schools_by_program,get_departments_by_school}
