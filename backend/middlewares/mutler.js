import multer from "multer";

const storage = multer.memoryStorage();
export const singleUpload = multer({ storage }).single("file"); //jaha jaha files ya images ko upload karna haii wha jaakr isko import karke use kar lo
