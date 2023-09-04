import PropTypes from 'prop-types';
export const FriendList=({array})=>{
  return(
    <ul className="friend-list">
   { array.map(a=>(
    <li className="item" key={a.id}>
    <span className="status">{a.isOnline}</span>
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
