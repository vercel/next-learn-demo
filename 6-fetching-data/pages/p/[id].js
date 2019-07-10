import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout.js'

export default function Post() {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}
