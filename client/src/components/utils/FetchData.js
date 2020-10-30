import axios from 'axios'


export const getData = async (url) => {
    const res = await axios.get(url)
    return res;
}

export const patchData = async (url, data) => {
    const res = await axios.patch(url, data)
    return res;
}