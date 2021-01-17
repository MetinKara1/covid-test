import React from 'react';
import XLSX from 'xlsx';
import moment from 'moment';
import { FormattedMessage,IntlProvider } from 'react-intl';

// import '../excellExport/excellExport.less';

const ExportExcell = ({ titles, data, lang, disabled = true, surveyData = false }) => {
    debugger;
    const onExportExcellClick = () => {
      const wscols = [];
      const enhancedData = data && data.map((k, index) => {
        const el = { ...k };
        const titled = {};
        Object.keys(el).forEach(key => {
          if (index === 0) {
            if (titles[key])
              wscols.push({
                width: 20
              });
          }

          if (titles[key] && titles[key].ttExcelRender) {
            el[key] = titles[key].ttExcelRender(el[key]);
          }
          if(lang === 'tr') {
            if (titles[key] && titles[key].tr) {
              if(el[key] !== null && (key.includes('date') || key.includes('Date'))){
                titled[titles[key].tr] = moment(el[key]).format('DD.MM.YYYY');  
              } else if (el[key] === true){
                titled[titles[key].tr] = 'Tamamlandı';
              } else if(el[key] === false) {
                titled[titles[key].tr] = 'Tamamlanmadı';
              } else {
                titled[titles[key].tr] = el[key];
              }
            }
          } else {
            if (titles[key] && titles[key].en) {
              if(el[key] !== null && (key.includes('date') || key.includes('Date'))){
                titled[titles[key].en] = moment(el[key]).format('DD.MM.YYYY');  
              } else if (el[key] === true){
                titled[titles[key].en] = 'Completed';
              } else if(el[key] === false) {
                titled[titles[key].en] = 'Incomplete';
              } else {
                titled[titles[key].en] = el[key];
              }
            }
          }
        });
        return { ...titled };
      });

      const newWorkBook = XLSX.utils.book_new();
      const newSheet = surveyData ? XLSX.utils.json_to_sheet(data) : XLSX.utils.json_to_sheet(enhancedData);
      XLSX.utils.book_append_sheet(newWorkBook, newSheet, 'Sayfa');
      newSheet['!cols'] = wscols;

      if(surveyData) {
        const range = XLSX.utils.decode_range(newSheet['!ref']);
        range.s.r = 1; // <-- zero-indexed, so setting to 1 will skip row 0
        newSheet['!ref'] = XLSX.utils.encode_range(range);
      }

      XLSX.writeFile(
          newWorkBook,
          'Unknown.xlsx',
          {
            bookType: 'xlsx'
          }
      );
    }

    return (
      <div className="excellExport">
        { disabled &&
          <button onClick={onExportExcellClick}>
            <i className="icon-excel"></i>
            <IntlProvider locale="en">
            <FormattedMessage id="label.downloadExcel" />
         </IntlProvider>
          </button>
        }
      </div>
    )
}

export default ExportExcell;