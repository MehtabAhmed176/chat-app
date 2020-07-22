const messageGenerate=(text)=>{

return {
    text,
    createdAt:new Date().getTime()
}

}
module.exports=messageGenerate