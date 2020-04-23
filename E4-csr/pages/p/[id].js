import Layout from '../../components/MyLayout'
import { getShows } from '../../lib/shows'

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async context => {
  const { id } = context.query
  const show = await getShows(context.query.id)

  return { show }
}

export default Post