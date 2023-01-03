import { Stream } from 'stream';
const fs = require('fs').promises;
export interface FileUpload {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => Stream;
}