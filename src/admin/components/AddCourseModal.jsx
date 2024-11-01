import React, { useState } from 'react';
import { 
  Users,
  CircleX,
  Globe2,
  School,
  CalendarDays,
  DollarSignIcon,
  User,
  Clock3
} from 'lucide-react';
import FormError from './FormError';

const AddCourseModal = ({ isOpen, setIsOpen, onAddCourse }) => {
    const initialFormState = {
      name: '',
      language: '',
      level: '',
      instructor: '',
      duration: '',
      schedule: '',
      time: '',
      capacity: '',
      price: '',
      startDate: '',
      type: 'Group'
    };
  
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Course name is required';
      }
      
      if (!formData.language.trim()) {
        newErrors.language = 'Language is required';
      }
      
      if (!formData.level.trim()) {
        newErrors.level = 'Level is required';
      }
      
      if (!formData.instructor.trim()) {
        newErrors.instructor = 'Instructor name is required';
      }
      
      if (!formData.duration.trim()) {
        newErrors.duration = 'Duration is required';
      }
      
      if (!formData.schedule.trim()) {
        newErrors.schedule = 'Schedule is required';
      }
      
      if (!formData.time.trim()) {
        newErrors.time = 'Time is required';
      }
      
      if (!formData.capacity || formData.capacity <= 0) {
        newErrors.capacity = 'Valid capacity is required';
      }
      
      if (!formData.price || formData.price <= 0) {
        newErrors.price = 'Valid price is required';
      }
      
      if (!formData.startDate) {
        newErrors.startDate = 'Start date is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validateForm()) {
        const newCourse = {
          id: Date.now(), // Simple ID generation
          ...formData,
          enrolled: 0,
          status: 'Enrolling'
        };
        
        onAddCourse(newCourse);
        setFormData(initialFormState);
        setIsOpen(false);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: undefined
        }));
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="inset-0 bg-black bg-opacity-70 fixed z-20 flex items-center justify-center">
        <div className="md:p-10 relative p-6 max-h-screen md:max-h-[90vh] max-w-full md:max-w-[100vw-3rem] bg-white rounded-lg overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 text-lg text-gray-700 hover:text-red-500"
          >
            <CircleX />
          </button>
          
          <div>
            <h2 className="text-lg text-gray-800 flex gap-2 items-center my-6">
              <Globe2 className="text-amber-500"/>
              <span>Add New Language Course</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="text-sm text-gray-800 space-y-4">
              <div className="space-y-2">
                <div className="flex gap-1 items-center font-normal">
                  <School className="text-gray-600"/>
                  <label htmlFor="name">Course Name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 placeholder:text-gray-500 border outline-none w-full rounded-md border-gray-300"
                />
                {errors.name && <FormError message={errors.name} />}
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <Globe2 className="text-gray-600"/>
                    <label htmlFor="language">Language</label>
                  </div>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="p-2 border outline-none w-full rounded-md border-gray-300"
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                  </select>
                  {errors.language && <FormError message={errors.language} />}
                </div>
  
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <Users className="text-gray-600"/>
                    <label htmlFor="level">Level</label>
                  </div>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="p-2 border outline-none w-full rounded-md border-gray-300"
                  >
                    <option value="">Select Level</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                  </select>
                  {errors.level && <FormError message={errors.level} />}
                </div>
              </div>
  
              <div className="space-y-2">
                <div className="flex gap-1 items-center font-normal">
                  <User className="text-gray-600"/>
                  <label htmlFor="instructor">Instructor</label>
                </div>
                <input
                  type="text"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  className="p-2 placeholder:text-gray-500 border outline-none w-full rounded-md border-gray-300"
                />
                {errors.instructor && <FormError message={errors.instructor} />}
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <CalendarDays className="text-gray-600"/>
                    <label htmlFor="duration">Duration</label>
                  </div>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="p-2 border outline-none w-full rounded-md border-gray-300"
                  >
                    <option value="">Select Duration</option>
                    <option value="8 weeks">8 weeks</option>
                    <option value="10 weeks">10 weeks</option>
                    <option value="12 weeks">12 weeks</option>
                    <option value="16 weeks">16 weeks</option>
                  </select>
                  {errors.duration && <FormError message={errors.duration} />}
                </div>
  
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <CalendarDays className="text-gray-600"/>
                    <label htmlFor="schedule">Schedule</label>
                  </div>
                  <select
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    className="p-2 border outline-none w-full rounded-md border-gray-300"
                  >
                    <option value="">Select Schedule</option>
                    <option value="Mon, Wed, Fri">Mon, Wed, Fri</option>
                    <option value="Tue, Thu">Tue, Thu</option>
                  </select>
                  {errors.schedule && <FormError message={errors.schedule} />}
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <Clock3 className="text-gray-600"/>
                    <label htmlFor="time">Time</label>
                  </div>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="p-2 border outline-none w-full rounded-md border-gray-300"
                  >
                    <option value="">Select Time</option>
                    <option value="09:00 - 10:30">09:00 - 10:30</option>
                    <option value="11:00 - 12:30">11:00 - 12:30</option>
                    <option value="14:00 - 16:00">14:00 - 16:00</option>
                    <option value="18:00 - 19:30">18:00 - 19:30</option>
                  </select>
                  {errors.time && <FormError message={errors.time} />}
                </div>
  
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <User className="text-gray-600"/>
                    <label htmlFor="capacity">Capacity</label>
                  </div>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    min="1"
                    className="p-2 placeholder:text-gray-500 border outline-none w-full rounded-md border-gray-300"
                  />
                  {errors.capacity && <FormError message={errors.capacity} />}
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <DollarSignIcon className="text-gray-600"/>
                    <label htmlFor="price">Price</label>
                  </div>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    className="p-2 placeholder:text-gray-500 border outline-none w-full rounded-md border-gray-300"
                  />
                  {errors.price && <FormError message={errors.price} />}
                </div>
  
                <div className="space-y-2">
                  <div className="flex gap-1 items-center font-normal">
                    <CalendarDays className="text-gray-600"/>
                    <label htmlFor="startDate">Start Date</label>
                  </div>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="p-2 placeholder:text-gray-500 border outline-none w-full rounded-md border-gray-300"
                  />
                  {errors.startDate && <FormError message={errors.startDate} />}
                </div>
              </div>
              <div className="flex gap-3 flex-wrap items-center justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2 bg-amber-500 border border-amber-500 text-white rounded-md hover:bg-amber-600"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default AddCourseModal  