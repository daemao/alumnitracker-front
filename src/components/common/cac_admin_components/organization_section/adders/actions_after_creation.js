import axios from"axios";
import store from "../../../../../store";
import {save_available_organizations,save_available_subindustries,save_available_industries} from "../../../../../actions/index"
const refresh_list = (headers)=>{
  axios({
    method: 'get',
    url: "/industries/get_all",
    headers:headers
  })
  .then(res=>{
    res.data.forEach(e=>e.selected=true)
    store.dispatch(save_available_industries(res.data));
  }).catch(err=>{
    console.log(err)
  })
  axios({
    method:"get",
    url:"/subindustries/get_all",
    headers:headers
  })
  .then(res=>{
    var organizations=[];
    res.data.forEach(e=>{
      e.selected=true;
      e.organizations.forEach(org=>{
        org.selected=true;
        organizations.push(org);
      })
    })
    store.dispatch(save_available_subindustries(res.data));
    store.dispatch(save_available_organizations(organizations));
  }).catch(err=>{
    console.log("=>err",err)
  })
}
export {refresh_list};
