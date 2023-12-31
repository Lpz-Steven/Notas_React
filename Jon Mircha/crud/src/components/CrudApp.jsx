import React from 'react'
import  { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';



const initialDb =[
    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso",
    }, 
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragon",
    },
    {
        id:3,
        name:"Hyoga",
        constellation:"Cisne",
    },
    {
        id:4,
        name:"Shun",
        constellation:"Andromeda",
    },
    {
        id:5,
        name:"Ikky",
        constellation:"Fenix",
    },
    
];



const CrudApp= ()=>{
    const[db, setDb]=useState (initialDb);
    const [dataToEdit, setDataToEdit]=useState(null);

    const createData=(data)=>{
        console.log(data)
        data.id=Date.now();
        setDb([...db,data])
    };
    const updateData=(data)=>{
        let newData = db.map(el=> el.id === data.id ? data: el)
        setDb(newData);
    };
    const deleteData=(id)=>{
        let isDelete = confirm(`Estas seguro de eliminar el registro con el id ${id}`)
        if(isDelete){
            let newData = db.filter(el=>el.id !== id);
            setDb(newData);
        }else{
            return;
        }
    };

    return(
        <div>
            <h2>Crud App</h2>
            <CrudForm
             createData={createData} 
             updateData={updateData} 
             dataToEdit={dataToEdit} 
             setDataToEdit={setDataToEdit}/>
            <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}/>
        </div>
    )
}

export default CrudApp