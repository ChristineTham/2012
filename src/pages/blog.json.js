import { getPosts } from '../common/config'

const posts = await getPosts()

export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
