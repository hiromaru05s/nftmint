import axios from 'axios';
import FormData from 'form-data';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

// 環境変数を読み込む
dotenv.config();

const JWT = process.env.PINATA_JWT;

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "path/to/file.png"; // アップロードするファイルのパス

    const file = fs.createReadStream(src);
    formData.append('file', file);

    const pinataMetadata = JSON.stringify({
        name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
        cidVersion: 0,
    });
    formData.append('pinataOptions', pinataOptions);

    try {
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${(formData as any)._boundary}`,
                'Authorization': `Bearer ${JWT}`
            }
        });
        console.log(res.data);
    } catch (error) {
        console.error(error);
    }
}

pinFileToIPFS();
