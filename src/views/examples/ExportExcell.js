import React from 'react';
import {Button} from 'antd';
import XLSX from 'xlsx';
import moment from 'moment';
import {FormattedMessage, IntlProvider} from 'react-intl';

// import '../excellExport/excellExport.less';

const ExportExcell = ({
  titles,
  data,
  lang = 'tr',
  disabled = true,
  surveyData = false,
}) => {
  let enhancedData = [];
  const onExportExcellClick = () => {
    if (data && Array.isArray(data)) {
      enhancedData = data.map(item => {
        let enhancedObject = {};
        Object.keys(item).forEach((key, index) => {
          if (key !== 'id') {
            if (key === 'Name') {
              enhancedObject['Ad Soyad'] = Object.values(item)[index];
            } else if (key === 'Email') {
              enhancedObject['Mail'] = Object.values(item)[index];
            } else if (key === 'Phone') {
              enhancedObject['Telefon'] = Object.values(item)[index];
            } else if (key === 'CorporateName') {
              enhancedObject['Kurum Adı'] = Object.values(item)[index];
            } else if (key === 'WorkerCount') {
              enhancedObject['Çalışan Sayısı'] = Object.values(item)[index];
            } else if (key === 'TestType') {
              enhancedObject['Test Tipi'] = Object.values(item)[index];
            } else if (key === 'Location') {
              enhancedObject['Lokasyon'] = Object.values(item)[index];
            } else if (key === 'Message') {
              enhancedObject['Mesaj'] = Object.values(item)[index];
            } else if (key === 'AddedDate') {
              enhancedObject['Tarih'] = moment(
                Object.values(item)[index]
              ).format('DD.MM.YYYY, h:mm:ss');
            } else {
              enhancedObject[key] = Object.values(item)[index];
            }
          }
        });
        return {...enhancedObject};
      });
    }
    console.log('enhancedData', enhancedData);
    const newWorkBook = XLSX.utils.book_new();
    const newSheet = XLSX.utils.json_to_sheet(enhancedData);
    XLSX.utils.book_append_sheet(newWorkBook, newSheet, 'Sayfa');
    //   newSheet['!cols'] = wscols;

    XLSX.writeFile(newWorkBook, 'Unknown.xlsx', {
      bookType: 'xlsx',
    });
  };

  return (
    <>
      <div className='excellExport'>
        {disabled && (
          // <button onClick={onExportExcellClick}>
          //   <i className='icon-excel'></i>
          //   <IntlProvider locale='en'>
          //     <FormattedMessage id="label.downloadExcel" />
          //   </IntlProvider>
          // </button>
          <div className='card-profile-actions'>
            <Button
              id='collapseExample'
              onClick={onExportExcellClick}
              className='float-right'
              color='default'
              href='#pablo'
              size='sm'
              style={{marginBottom: 10}}
            >
              <span className='btn-inner--icon mr-1'>
                <i className='ni ni-curved-next' />
              </span>
              EXCELL AKTAR
            </Button>
          </div>
          // <Button
          //   type='button'
          //   id='collapseExample'
          //   onClick={onExportExcellClick}
          //   style={{
          //     marginBottom: 5,
          //     width: '100%',
          //     textAlign: 'start',
          //     color: '#32325d',
          //     fontFamily: 'Arial',
          //     textTransform: 'none',
          //   }}
          // >
          //   Excell AKTAR
          // </Button>
        )}
      </div>
    </>
  );
};

export default ExportExcell;
