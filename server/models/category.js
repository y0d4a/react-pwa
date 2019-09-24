import { mongoose, Schema } from '../configs';

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        validate: RegExp(/^[a-zA-Z0-9 ]*$/),
        unique: true
    }
}, { timestamps: true });

const ModelCategory = mongoose.model('Category', categorySchema);

export default ModelCategory;