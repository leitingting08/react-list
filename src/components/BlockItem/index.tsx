import IconCoin from 'src/components/Icon/IconCoin'
import { listProp } from 'src/interface'
import IconStatus from 'src/components/Icon/IconStatus'
import styles from './index.module.less'

const BlockItem = (props: listProp) => {
  const { id, name, icon, price, endDate, status, activeIndex, onClick } = props

  const statusColor = (status: string) => {
    let color = ''
    switch (status) {
      case 'Active':
        color = '#76FCB3'
        break
      case 'Terminated':
        color = '#FF007A'
        break
      case 'Suspended':
        color = '#FFE500'
        break
    }
    return color
  }

  return (
    <div className={`${styles.block} mt-4 mb-5 ${activeIndex === id ? `${styles.active}` : ''}`} onClick={onClick}>
      <div className="flex justify-between text-white items-center">
        <div className={`${styles.block_name} text-center font-bold`}>{name}</div>
        <div
          className={`flex items-center pr-2 justify-end ${styles.block_status}`}
          style={{ color: statusColor(status) }}
        >
          <IconStatus color={statusColor(status)} />
          <span className="pl-2">{status}</span>
        </div>
      </div>
      <div className={`${styles.block_content} flex justify-between text-white p-3.5 items-center`}>
        <div className={styles.block_icon}>{icon ? <img src={icon} /> : <IconCoin />}</div>
        <div>
          <div className="text-right">{price}</div>
          <div className="text-right">End: {endDate}</div>
        </div>
      </div>
    </div>
  )
}

export default BlockItem
