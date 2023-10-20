const express = require('express');
const router = express.Router();
const S3 = require('aws-sdk/clients/s3');
const asyncHandler = require('../middleware/asyncHandler');


const s3 = new S3({
    region: "us-east-2",
    accessKeyId: "AKIAQX4PJ6CTI7VIALQ3",
    secretAccessKey: "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"
});


exports.Upload = async (req, res) => { 
    try {
        const post = await s3.createPresignedPost({
            Bucket: "swiftcore",
            Fields: {
                key: req.body.file,
                'Content-Type': req.body.fileType,
            },
            Expires: 600,
            Conditions: [
                ['content-length-range', 0, 1073741824],
            ],
        });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a presigned URL' });
    }
};


exports.FetchImageList = asyncHandler(async (req, res) => { 
    try {
        const data = await s3.listObjectsV2({
            Bucket: "swiftcore",
        }).promise();

        const images = data.Contents?.map((content) => content.Key) || [];
        
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image list' });
    }
});
