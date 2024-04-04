import axios from "axios";
import fileDownload from "js-file-download";

export const fileDownloader = async(url, name) => {
    await axios.get(url, {
        responseType: 'blob'
    }).then((res) => {
        fileDownload(res.data, name)
    }).catch((error) => console.log(error))
    return
}