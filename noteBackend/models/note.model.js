import mongoose from "mongoose";
import slugify from "slugify";

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

noteSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Note = mongoose.model("Post", noteSchema);

export default Note;
