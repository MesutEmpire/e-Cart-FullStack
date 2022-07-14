const util = require("util");
const Multer = require("multer");
const processFile = Multer({
    storage: Multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 },
}).fields([{ name: 'img', maxCount: 6 },]);


const processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;