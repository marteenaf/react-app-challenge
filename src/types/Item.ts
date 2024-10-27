/**
 * @type Type for a data item as per local data used in project
 */
type Item = {
    title: string,
    attributes: Attribute[]
}
/**
 * @type Type for the attributes used in Item
 */
export type Attribute = {
    name: string,
    value: number,
    unit: string
}

export default Item;