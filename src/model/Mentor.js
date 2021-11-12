import { Schema, model } from "mongoose";

const MentorSchema = Schema(
  {
    dni: {
      type: String,
      trim: true,
    },
    nivel: {
      type: Number,
      default: 0,
    },
    idMentorSuperior: {
      type: Number,
      default: null,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Mentor", MentorSchema);
