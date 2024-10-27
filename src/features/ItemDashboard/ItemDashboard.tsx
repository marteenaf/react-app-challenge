import Table from "../../components/Table/Table";
import Item from "../../types/Item";
import BarChart from "../../components/BarChart/BarChart";
import styles from './ItemDashboard.module.css';
import TableHeader from "@/types/TableHeader";

type ItemDashboardProps = {
    item: Item,
    id: string
}

/**
 * Component to render the table and graphs for a specific data item
 * Is reused to display different data items in the dashbord page
 * @param {ItemDashboardProps} props Props for the Item Dashboard include the item data and an id
 * @returns {JSX.Element}
 */
function ItemDahsboard({ item, id }: ItemDashboardProps) {

    const headers: TableHeader[] = Object.keys(item?.attributes[0]).map(k => { return { 'value': k, 'title': k.toUpperCase() } })

    return (
        <div id={id} className={styles['item-dashboard-page']}>
            <div className='card' style={{ width: '100%' }}><h2>{item.title}</h2></div>
            <div className={styles['data-wrapper']}>
                <div className={`${styles['data-card']} card`}>
                    <Table data={item?.attributes} headers={headers} />
                </div>
                <div className={`${styles['data-card']} card`} style={{ minHeight: '300px', height: '300px' }}>
                    <BarChart data={item.attributes.map(a => { return { 'name': `${a.name} [${a.unit}]`, 'value': a.value } })} id={id + '_chart'}></BarChart>
                </div>
            </div>
        </div >
    )
}

export default ItemDahsboard; 