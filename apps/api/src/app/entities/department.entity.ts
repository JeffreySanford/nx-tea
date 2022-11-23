import * as mongoose from 'mongoose';

export interface Department {
  department: string;
  studentcount: number;
}

export const DepartmentSchema = new mongoose.Schema({
  department: { type: String, required: true },
  studentcount: { type: Number, required: true },
});