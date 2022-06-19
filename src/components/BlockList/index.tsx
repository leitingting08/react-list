import React, { useEffect, useState } from 'react'
import IconOracle from 'src/components/Icon/IconOracle'
import BlockItem from 'src/components/BlockItem'
import styles from './index.module.less'
import request from 'src/utils/request'
import { listProp } from 'src/interface'

const BlockList: React.FC = () => {
  const [list, setList] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  const getList = async () => {
    const { success, data } = await request('get', '/coin/list')
    if (success) {
      setList(data)
    }
  }
  useEffect(() => {
    getList()
  }, [])
  const onHandleClick = (id: number) => {
    if (activeIndex === id) {
      setActiveIndex(0)
    } else {
      setActiveIndex(id)
    }
    return {}
  }
  return (
    <>
      <div className="flex items-center">
        <IconOracle />
        <span className={`${styles.title} text-2xl flex-1`}>Oracle</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item: listProp) => {
          return <BlockItem {...item} key={item.id} onClick={() => onHandleClick(item.id)} activeIndex={activeIndex} />
        })}
      </div>
    </>
  )
}

export default BlockList
