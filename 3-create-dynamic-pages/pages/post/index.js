import Link from 'next/link'
import Layout from '../../components/MyLayout'

export default function Post() {
  const postList = ['question', 'victory', 'insight', 'leverage']

  return (
    <Layout>
      <p>Post List</p>
      <ul>
        {postList.map((value, index) => (
          <li key={index}>
            <Link>
              <a href={`post/${value}`}>{value}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
