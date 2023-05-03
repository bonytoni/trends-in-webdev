import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../util/firebase"
import { Task, TaskWithId } from "../../types"
import TaskAddControl from "./TaskAddControl"
import TaskList from "./TaskList"
import { useAuth } from "../auth/AuthUserProvider"

const FrodoHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    Frodo: My Todo List
  </Heading>
)

const Frodo = () => {
  const [tasks, setTasks] = useState<TaskWithId[] | null>(null)
  const { user } = useAuth()

  const taskQuery = query(
    collection(db, "tasks"),
    where("owner", "==", user!.email)
  )

  useEffect(() => {
    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      const snapshotTasks: TaskWithId[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Task
        return { ...data, id: doc.id }
      })
      setTasks(snapshotTasks)
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      <FrodoHeading />
      <TaskAddControl />
      {tasks ? <TaskList tasks={tasks} /> : <Spinner />}
    </VStack>
  )
}

export default Frodo
