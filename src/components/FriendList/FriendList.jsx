import PropTypes from 'prop-types';
import css from "./FriendList.module.css"
export const FriendList=({array})=>{
  return(
    <ul className="friend-list" style={{
      marginBottom:"50px"
    }}>
   { array.map(a=>(
    <li className={`item ${css.item}`} key={a.id}>
      {
        a.isOnline? <span className={`status ${css.status}`}></span>:null
      }

    <img className="avatar" src={a.avatar} alt={a.name} width="48" />
    <p className="name">{a.name}</p>
  </li>
   ))
   }
</ul>
  )
}
FriendList.propTypes={
  array:PropTypes.array,


 }
