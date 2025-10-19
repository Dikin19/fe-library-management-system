import { Link } from "react-router"


function Home() {

  return (
    <div>
      
      <div className="flex justify-center gap-10">

        <h1>HOME</h1>

        <Link to="/register" className="font-semibold hover:underline" >
          Register
        </Link>

      </div>

    </div>
  )
}

export default Home
