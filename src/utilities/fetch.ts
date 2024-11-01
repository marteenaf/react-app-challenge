/**
 * Function to get data saved locally
 * @param {string} path Path of local file to retrieve 
 * @returns {object} Final data object
 */

export async function fetchLocalJson(path: string) {
    try {
        const response = await fetch(path);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error('Error getting data from path', path, err);
    }

}

export { };