import { fetchLocalJson } from "../utilities/fetch";
import { useEffect, useState } from "react";
import ItemDahsboard from "../features/ItemDashboard/ItemDashboard";
import Item from "../types/Item";
import MainLayout from "../layouts/MainLayout";

/**
 * Component that renders the dashboard page to display stored data
 * Uses a useEffect hook to fetch the data on first load
 * Stores state for the current item of data being displayed
 * 
 * @returns {JSX.Element}
 */
function DashboardPage() {

    const [data, setData] = useState<Item[]>([]);
    const [currentItem, setCurrentItem] = useState<number>(0);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchLocalJson('/data/data.json');
            setData(result);
        }
        getData();

    }, []);

    //format the data to fit in table + header

    return (
        <MainLayout pageTitle="Dashboards">
            <div>
                {data && data.length > 0 ?
                    data[currentItem] && currentItem < data.length ?
                        <ItemDahsboard item={data[currentItem]} id={'item_' + currentItem}></ItemDahsboard> : '' : ''
                }
                <input type='range' step={1} min={0} max={data.length - 1} value={currentItem} onInput={(e) => { setCurrentItem(parseInt((e.target as HTMLInputElement).value)) }}></input>
            </div>
        </MainLayout>
    )
}
export default DashboardPage;