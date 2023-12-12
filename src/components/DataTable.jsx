import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ProductService } from '../services/ProductService';
export default function DataTableComp() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);
  const header = (
    <div className='flex flex-wrap align-items-center justify-content-between gap-2'>
      <span className='text-xl text-900 font-bold'>Products</span>
      <Button icon='pi pi-refresh' rounded raised />
    </div>
  );
  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;
  return (
    <div className='py-2'>
      <DataTable
        value={products}
        showGridlines
        paginator
        rows={2}
        rowsPerPageOptions={[2, 5, 10, 25, 50]}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field='code' header='Code'></Column>
        <Column field='name' header='Name'></Column>
        <Column field='category' header='Category'></Column>
        <Column field='quantity' header='Quantity'></Column>
      </DataTable>
    </div>
  );
}
