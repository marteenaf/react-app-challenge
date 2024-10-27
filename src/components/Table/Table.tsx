import styles from './Table.module.css';
import TableHeader from '../../types/TableHeader';

type TableProps = {
    data: any[],
    headers: TableHeader[]
}

/**
 * Reusable component to display data in a table
 * @param {TableProps} props Props for the table include the data and specified headers
 * @returns {JSX.Element}
 */
function Table({ data, headers }: TableProps) {
    return (
        <table style={styles}>
            <tbody>
                <tr>
                    {/*Haders will go here*/}
                    {
                        headers.map((h, i) => {
                            return (<th key={h.value + '_' + i}>{h.title}</th>)
                        })
                    }
                </tr>
                {
                    data.map((d, i) => {
                        return (
                            <tr key={i}>
                                {
                                    headers.map(h => {
                                        return (
                                            d[h.value] ?
                                                <td key={h.value + '_' + d[h.value]}> {d[h.value]}</td> : ''
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default Table;