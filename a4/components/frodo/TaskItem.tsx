import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { TaskWithId } from "../../types"
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../../util/firebase"

type Props = {
  readonly task: TaskWithId
}

const TaskItem = ({ task: { id, text, checked } }: Props) => {
  const toggleTask = () => {
    // TODO: Implement this!
    const taskDoc = doc(collection(db, "tasks"), id)
    updateDoc(taskDoc, {checked: !checked})
  }

  const deleteTask = () => {
    // TODO: Implement this!
    const taskDoc = doc(collection(db, "tasks"), id)
    deleteDoc(taskDoc)
  }

  return (
    <HStack w="100%">
      <Checkbox isChecked={checked} onChange={toggleTask} />
      <Text textDecorationLine={checked ? "line-through" : "initial"}>
        {text}
      </Text>
      <IconButton
        aria-label="delete task"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteTask}
      />
    </HStack>
  )
}

export default TaskItem
