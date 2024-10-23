import { useNavigate } from 'react-router-dom'
import Icon from '../../Icon/Icon'
import { TPost } from '../../mockRpc/getLatestListRpc'
import './card.scss'

const PostCard = ({ id, title, preview, time, tag }: TPost) => {
  const navigate = useNavigate()
  return (
    <div className="post-card" onClick={() => navigate('/post/' + id)}>
      <div className="post-card__tags">
        {tag.map((item, index) => (
          <div className='post-card__tag' key={index}>{item}</div>
        ))}
      </div>
      <div className="post-card__title">
        <h2>{title}</h2>
      </div>
      <div className="post-card__description">
        <p>{preview}</p>
      </div>
      <div className="post-card__footer">
        <div className="post-card__more">
          Learn More
          {Icon('arrow_forward')}
        </div>
        <div className="post-card__time">
          <p>{time} min read</p>
        </div>
      </div>
    </div>
  )

}
export default PostCard
