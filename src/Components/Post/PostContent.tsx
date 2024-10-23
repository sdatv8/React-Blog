import { Fragment } from "react/jsx-runtime";
import { IBodyContent } from "../../mockRpc/getPostRpc";

interface IPostContentProps {
  title: string;
  body: IBodyContent[];
}

const PostContent = ({ title, body }: IPostContentProps) => {


  const renderBlock = (item: IBodyContent) => {
    switch (item.type) {
      case 'header':
        return <h2>{item.content}</h2>
      case 'text':
        return <p>{item.content}</p>
      case 'image':
        return <img src={'../..' + item.content} alt="post" />
      default:
        return null
    }
  }

  return (
    <div className="post-content">
      <div className="post-content-title">
        {title}
      </div>
      {body.map((item, index) => (
        <Fragment key={index}>
          {renderBlock(item)}
        </Fragment>
      ))}
    </div>
  )
}

export default PostContent
