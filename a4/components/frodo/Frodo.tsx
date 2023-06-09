import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Task, TaskWithId } from "../../types"
import TaskAddControl from "./TaskAddControl"
import TaskList from "./TaskList"
import { db } from "../../util/firebase"

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

// TODO: Create a Firebase query for the `tasks` collection
const taskQuery = query(collection(db, "tasks"))

const Frodo = () => {
  const [tasks, setTasks] = useState<TaskWithId[] | null>(null)

  // Subscribes to `taskQuery`
  // We define a function to run whenever the query result changes
  useEffect(() => {
    // TODO: Update `tasks` state using snapshot (uncomment the following)
    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      const snapshotTasks : TaskWithId[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Task
        return {...data, id: doc.id}
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
