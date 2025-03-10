import multer from "multer";
import path from "path";

// Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Uploads go to 'uploads/' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

// File Filter (Accept JPEG only)
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Only JPEG images are allowed"));
  }
};

// Upload Middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;
