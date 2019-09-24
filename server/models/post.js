import { mongoose, Schema } from '../configs';

const postSchema = new Schema({
    category_id: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });

const ModelPost = mongoose.model('Post', postSchema);

export default ModelPost;
