import React from 'react'

const HeaderCoding = () => {
  return (
   <>
    <div className="sc-col">
     <div className="sc-name">Coding Profile</div>
     <div className="home__codings">
        <a href="https://codeforces.com/profile/harshu_45" className="home__code-link" target='_blank'>
            <img src="/assets/cp2.png" height="10" width="20" alt="" /> 
            </a> 
            <a href="https://leetcode.com/harsh_45" className="home__code-link" target='_blank'>
            <img src="/assets/leetcode.png"height="10" width="20" alt="" />  
            </a> 
            <a href="https://www.geeksforgeeks.org/user/harsh_45/"  className="home__code-link" target='_blank'>
            <img src="/assets/gfg2.svg" height="15" width="25" alt="" /> 
            </a> 
            <a href="https://www.naukri.com/code360/profile/2895f3d7-6b54-42ea-8744-7ad9978e7375" className="home__code-link" target='_blank'>
            <img src="/assets/cn.svg" height="10" width="20" alt="" /> 
            </a> 
        </div>
     </div>   
   </>
  )
}

export default HeaderCoding