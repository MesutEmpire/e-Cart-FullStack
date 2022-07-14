const processFileMiddleware = require("../middleware/upload");
const { format } = require("util");
import {Storage} from "@google-cloud/storage";
import {Request, Response} from "express";
// Instantiate a storage client with credentials

const storage = new Storage({ keyFilename: "google-cloud-key.json" });
const bucket = storage.bucket("products-ecart");
const upload = (req:any) => {
    const {img} = req
    const [imgfile] = img

    return new Promise((resolve, reject) => {
    try {
        if (!imgfile) {
            reject ({
                success: false,
                status: 400,
                message: "Please upload a file!"
            })
        }
        // Create a new blob in the bucket and upload the file data.

        const blob = bucket.file(imgfile.originalname);

        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on("error", (err) => {
            reject( {
                success: false,
                status: 500,
                message: err.message
            })
        });
        blobStream.on("finish", (data: any) => {

            // Create URL for directly file access via HTTP.
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );

            try {
                // Make the file public
                bucket.file(imgfile.originalname).makePublic();

            } catch {

                resolve ({
                    success:false,
                    status:500,
                    message:`Uploaded the file successfully:${imgfile.originalname}, but public access is denied!`
                })
            }

            resolve ({
                success: true,
                status: 200,
                message: "Uploaded the file successfully: " + imgfile.originalname,
                url: publicUrl
            })


        });

        blobStream.end(imgfile.buffer);
    } catch (err) {

        reject ({
            success: false,
            status: 500,
            message: `Could not upload the file: ${imgfile.originalname}. ${err}`
        })
    }
})
};
module.exports = {
    upload,
};