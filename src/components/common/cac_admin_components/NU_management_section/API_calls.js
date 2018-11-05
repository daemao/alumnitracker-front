import axios from "axios";
export const get_schools_by_program = (program,jwt,next)=>{
  var headers = {};
  headers["x-auth"]= jwt;
  axios({
    method: 'get',
    url: `/nu_schools/get_schools_by_program/${program}`,
    headers:headers
  })
  .then(res=>{
    return next(null,res);
  }).catch(err=>{
    return next(err,null);
  })
}
export const get_departments_by_school_and_program = (school,program,jwt,next)=>{
  var headers = {};
  headers["x-auth"]= jwt;
  axios({
    method: 'get',
    url: `/nu_departments/get_departments_by_school_and_program/${school}/${program}`,
    headers:headers
  })
  .then(res=>{
    return next(null,res);
  }).catch(err=>{
    return next(err,null);
  })
}
