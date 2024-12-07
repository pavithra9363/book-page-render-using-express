  const express=require('express');
  const app=express();
  const PORT=process.env.PORT|8055;
  const path=require ('path');
  app.use(express.static(path.join(__dirname,'public')));
  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'htmls' ,'first.html'));
  });
    app.get('/product',(req,res)=>{
      res.sendFile(path.join(__dirname,'public', 'htmls' ,'second.html'));  
  })
  app.post('/booklist',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'htmls' ,'third.html'));  
})
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);   

    
    })         
  



 