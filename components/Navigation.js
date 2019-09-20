import Link from 'next/link'
import Layout from './Layout'

export default () => {
  return (
    <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>about</a></Link>
      <Link href="/hireme"><a>hireme</a></Link>
    </div>
  )
}