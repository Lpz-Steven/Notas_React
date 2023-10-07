import  { useState } from 'react'
import { InputAddCategories } from './components/InputAddCategories';
import { GifGrid } from './components/GifGrid';

export const App = () => {
    
    const [categories, setCategories] = useState(['arcane']);

    const onAddCategory=(newCategory)=>{
      setCategories([newCategory, ...categories])
      console.log(newCategory)
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <InputAddCategories 
         onNewCategory={(value)=>onAddCategory (value)}
         />
              {
                categories.map((category)=>(
                  <GifGrid 
                  key={category} 
                  category={category}/>
                ))
              }
        
    </>
  )
}


