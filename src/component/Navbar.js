import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAutenticate}) => {
    
    const menuList=["여성","Divided","남성","신생아/유아","아동","H&M Home","Sale","지속가능성"]
    const navigate = useNavigate()
    const goToLogin = () =>{
        if(!authenticate){
            navigate("/login");
        }else{
            setAutenticate(false);
            navigate("/login");
        }
        
    }
    const goToHome = () =>{
        navigate("/");
    }
    const search = (event) => {
        //console.log("search!")
        if(event.key === "Enter"){
            console.log("we click this key",event.key);
            console.log(authenticate);
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }
  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
         <FontAwesomeIcon icon={faUser} />
         <div className='cursor-pointer'>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png' onClick={goToHome} className='cursor-pointer'/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu) => (
            <li>{menu}</li>
            ))}
        </ul>
        <div class="search-container">
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' onKeyPress={(event)=>search(event)} placeholder=" 제품검색" class="search-input"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
