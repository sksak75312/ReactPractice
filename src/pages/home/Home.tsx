import {Link, Outlet} from 'react-router-dom'
function Home() {
  return (
    <>
          <Link to='/'>home</Link> <br />
          <Link to='/mealsystem'>1</Link>
      <h1>Home</h1>
      <Outlet />
    </>
  )
}

export default Home;