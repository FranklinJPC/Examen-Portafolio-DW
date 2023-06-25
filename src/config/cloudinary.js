const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    // llamada a las variables del archivo env
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});

// Exportacion del metodo por default
module.exports.uploadImage = async(filePath) => {
    // Subir la imagen de la ruta de la carpeta portafolio de cloudinary
    return await cloudinary.uploader.upload(filePath,{folder:'portafolio'})
}
// Eliminar imagenes
module.exports.deleteImage = async (publicId)=>{
    
    return await cloudinary.uploader.destroy(publicId)
}