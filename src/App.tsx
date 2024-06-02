import Layout from "./Layout/index"
import { Outlet } from "react-router-dom"
const App = () => {
  return (
    <Layout outlet={<Outlet/>}/>

    // </Layout>
  )
}

export default App