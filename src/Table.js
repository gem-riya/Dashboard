import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
   const [rowData] = useState([
       {name: "Mndate 1 2022-01-31", client: "Allianz AG", date: '12/06/2022'},
       {name: "Mndate 1 2022-01-31", client: "Allianz AG", date: '12/06/2022'},
       {name: "Mndate 1 2022-01-31", client: "Allianz AG", date: '12/06/2022'},
       {name: "Mndate 1 2022-01-31", client: "Allianz AG", date: '12/06/2022'},
       {name: "Mndate 1 2022-01-31", client: "Allianz AG", date: '12/06/2022'},
   ]);
   
   const [columnDefs] = useState([
       { headerName:'Name' , field: 'name', sortable:true,editable:true, filter:true, checkboxSelection:true,tooltipField:"name"},
       { headerName:'Client', field: 'client',tooltipField:"client" },
       {headerName:'Last Response Date', field: 'date',tooltipField:"date" }
   ]);

   const defaultColDef={
        flex:1

   }

   return (
       <div 
        className="ag-theme-alpine"
        style={{height: 400, width: '100%' }}
        >
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={defaultColDef}
               enableBrowserTooltips={true}
               >
           </AgGridReact>
       </div>
   );
};

export default Table;