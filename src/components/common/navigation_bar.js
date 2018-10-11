import React from 'react';
import {LogoutButton} from './logout-button';
export const Navigation = (props)=>{
  if(props.user_type === "alumni"){
    return <div>Navbar for alumni</div>
  }
  else if(props.user_type === "cac_admin"){
    return (
      <div>
        <nav>
          <div>
            Alumni management
          </div>
          <div>
            Database management
          </div>
          <div>
            Datamining
          </div>
          <div>
            Personal settings
          </div>
          <LogoutButton/>
          </nav>
      </div>)
  }
}
