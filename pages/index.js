import Layout from "../components/Layout";
import Link from 'next/link'
import PerfOptTest from '../components/perf-opt-test'

export default () => {
  return (
    <Layout title='Home'>
      <PerfOptTest />
    </Layout>
  )
}