import { useEffect, useState } from "react"

type Item = {
  _id: string,
  name: string,
  description: string
}

const ItemList = () => {
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`http://localhost:4000/items`)
      const data = await response.json()
      setItems(data)
    }

    getItems()
  }, [])

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items?.map(item => (
          <li key={item._id}>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList