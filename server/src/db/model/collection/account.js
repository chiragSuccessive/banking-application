import mongoose from 'mongoose';

// import modelLib from '../lib';

const { Schema } = mongoose;


const accountSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    accountNo: {
        type: String,
        unique: true,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
    },
    branch: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
    },
    transactionType: {
        type: String,
    }
    
}, { collection: 'accounts', timestamps: true });

const account = mongoose.model('account', accountSchema);

export default account;
