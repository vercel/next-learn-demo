import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { getShows } from '../lib/shows.js'

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const shows = await getShows()
  return { shows }
}

export default Index
