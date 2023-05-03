import { Button, Container, Spinner } from "@chakra-ui/react"
import Frodo from "../components/frodo/Frodo"
import Layout from "../components/layout/Layout"
import { signInWithGoogle, signOut } from "../util/firebase"
import { useAuth } from "../components/auth/AuthUserProvider"

const FrodoPage = () => {
  const { user, loading } = useAuth()
  return (
    <Layout title="Frodo">
      {loading ? <Spinner /> : user ? <Frodo /> : <></>}
      <Button onClick={user ? signOut : signInWithGoogle}>
        {user ? "Sign Out" : "Sign In"}
      </Button>
    </Layout>
  )
}

export default FrodoPage
