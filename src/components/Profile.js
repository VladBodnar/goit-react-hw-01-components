export default function Profile(props) {
    return <div >
    <div >
      <img
        src={props.avatar}
        alt={props.username}
       width="240"
      />
      <p >{props.username}</p>
      <p >{props.tag}</p>
      <p>{props.location}</p>
    </div>
  
    <ul >
      <li>
        <span >Followers</span>
        <span > {props.stats.followers}</span>
      </li>
      <li>
        <span >Views</span>
        <span > {props.stats.views} </span>
      </li>
      <li>
        <span >Likes</span>
        <span >{props.stats.views}</span>
      </li>
    </ul>
  </div>
  }


