import multer from 'multer'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
      console.log(file)
    }
  })
  
  export const upload = multer({ 
    storage,
  })