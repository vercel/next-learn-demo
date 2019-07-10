import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout'

export default function Post() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Layout>
      <p>Post: {pid}</p>
    </Layout>
  )
}
