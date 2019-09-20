import Navigation from './Navigation'

export default ({ children, title }) => {
  return (
    <div>
      <Navigation />
      <h1>{title}</h1>
      <p>This is the {title} page</p>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>{`

      `}</style>
    </div>
  )
}