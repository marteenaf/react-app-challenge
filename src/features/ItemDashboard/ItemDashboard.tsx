import Table from "../../components/Table/Table";
import Item from "../../types/Item";
import BarChart from "../../components/BarChart/BarChart";
import styles from './ItemDashboard.module.css';

type ItemDashboardProps = {
    item: Item,
    id: string
}

function ItemDahsboard({ item, id }: ItemDashboardProps) {

    return (
        <div id={id} className={styles['item-dashboard-page']}>
            <div className='card' style={{ width: '100%' }}><h2>{item.title}</h2></div>
            <div className={styles['data-wrapper']}>
                <div className={`${styles['data-card']} card`}>
                    <Table data={item?.attributes} headers={[{ 'value': 'name', 'title': 'Name' }, { 'value': 'value', 'title': 'Value' }]} />
                </div>
                <div className={`${styles['data-card']} card`} style={{ minHeight: '300px', height: '300px' }}>
                    <BarChart data={item.attributes.map(a => { return { 'name': `${a.name} [${a.unit}]`, 'value': a.value } })} id={id + '_chart'}></BarChart>
                </div>
            </div>
        </div >
    )
}

export default ItemDahsboard; 