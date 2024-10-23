import { type IBodyContent } from "../../mockRpc/getPostRpc"

type IPostNavigateProps = {
  body: IBodyContent[]
}

const PostNavigate = ({ body }: IPostNavigateProps) => {
  return (
    <div className="post-navigate">
      {body.filter(item => item.type === 'header').map((item, index) => (
        <div className="post-header" key={index}>
          {item.content}
        </div>
      ))}
    </div>
  )
}

export default PostNavigate
