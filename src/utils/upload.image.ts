import cloudinary from "../config/cloudinary"

export const imageUploader = async (uploadStream?: any) => {
    const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream((error: any, uploadResult: any) => {
            if (error) {
                return reject(error);
            }
            return resolve(uploadResult);
        }).end(uploadStream);
    });
    return (uploadResult as any).secure_url
}