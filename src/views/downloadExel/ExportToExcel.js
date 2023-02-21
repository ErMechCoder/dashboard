
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button  from '@mui/material/Button';



const downloadBtn={
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginLeft:'35%'

}




const ExportToExcel = ({finalDataDetail}) => {

    const fileType = "xlsx"
    const exportToCSV = () => {
        finalDataDetail.map((item, index)=> {
            // console.log("item", item)
             item['json'] = XLSX.utils.json_to_sheet(item.data);
        })
        const obj = {
            Sheets:{},
            SheetNames:[]
        }
        finalDataDetail.map((item, key)=> {
           return ( obj.Sheets[item.category] = item.json,
           obj.SheetNames.push(item.category))
        })
        console.log("obj", obj)
        const test = {...obj}
        const excelBuffer = XLSX.write(test, {bookType:"xlsx", type:"array"});
        const data = new Blob([excelBuffer], {type:fileType});
        FileSaver.saveAs(data, `${'myfile'}+ ${'.xlsx'}`)
       
    }

    return(
        <Button style={downloadBtn} variant="contained" color="success" onClick={exportToCSV}>Download File</Button>
    )
}
export default ExportToExcel ;