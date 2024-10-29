import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    tokens: [
      {
        type: String,
        required: true,
      },
    ],
    Workouts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
