import React, { useState } from 'react';
import { Users, CircleX, Globe2, School, CalendarDays, DollarSignIcon, User, Clock3 } from 'lucide-react';
import { InputContainer, InputElement } from './Atoms';
import useValidation from '../utils/useValidation';

const AddCoursePopUp = ({ isOpen, setIsOpen, onAddCourse }) => {
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

  const { errors, validateEmpty, validateNumber, clearError } = useValidation()
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validations
    const isFormValid = [
      validateEmpty('name', formData.name),
      validateEmpty('language', formData.language),
      validateEmpty('level', formData.level),
      validateEmpty('instructor', formData.instructor),
      validateEmpty('duration', formData.duration),
      validateEmpty('schedule', formData.schedule),
      validateEmpty('time', formData.time),
      validateNumber('capacity', formData.capacity),
      validateNumber('price', formData.price),
      validateEmpty('startDate', formData.startDate),
    ].every(Boolean);

    if (isFormValid) {
      const newCourse = {
        id: Date.now(),
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
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) clearError(name);
  };

  if (!isOpen) return null;

  return (
    <div className="inset-0 bg-black bg-opacity-70 fixed z-20 flex items-center justify-center">
      <div className="md:p-10 relative p-6 max-h-screen md:max-h-[90vh] max-w-full md:max-w-[100vw-3rem] bg-white rounded-lg overflow-y-auto">
        <button onClick={() => setIsOpen(false)} className="absolute right-3 top-3 text-lg text-gray-700 hover:text-red-500">
          <CircleX />
        </button>

        <div>
          <h2 className="text-lg text-gray-800 flex gap-2 items-center my-6">
            <Globe2 className="text-amber-500" />
            <span>Add New Language Course</span>
          </h2>

          <form onSubmit={handleSubmit} className="text-sm text-gray-800 space-y-4">
            <InputContainer icon={School} label={"Course Name"} inputName={"name"}>
              <InputElement
                type={"text"}
                placeholder="Course name"
                inputName={"name"}
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </InputContainer>
            <div className="grid grid-cols-2 gap-4">
                <InputContainer icon={Globe2} inputName={"language"} label={"Language"}>
                    <InputElement 
                        type={"select"} 
                        options={["English","German"]} 
                        onChange={handleChange}
                        inputName={"language"}
                        value={formData.language}
                        placeholder={"Select Language"}
                        error={errors.language}
                    />
                </InputContainer>
                <InputContainer icon={Users} inputName={"level"} label={"Level"}>
                    <InputElement 
                        type={"select"} 
                        options={["A1","A2","B1","B2","C1","C2"]} 
                        onChange={handleChange}
                        inputName={"level"}
                        value={formData.level}
                        placeholder={"Select Level"}
                        error={errors.level}
                    />
                </InputContainer>
            </div>
            <InputContainer icon={User} label={"Instructor"} inputName={"instructor"}>
                <InputElement type={"text"}  placeholder="Instructor" inputName={"instructor"} value={formData.instructor} onChange={handleChange} error={errors.instructor}/>
            </InputContainer>
            <div className="grid grid-cols-2 gap-4">
                <InputContainer icon={Users} inputName={"duration"} label={"Duration"}>
                    <InputElement 
                        type={"select"} 
                        options={["8 weeks","10 weeks","12 weeks","16 weeks"]} 
                        onChange={handleChange}
                        inputName={"duration"}
                        value={formData.duration}
                        placeholder={"Select Duration"}
                        error={errors.duration}
                    />
                </InputContainer>
                <InputContainer icon={CalendarDays} inputName={"schedule"} label={"Schedule"}>
                    <InputElement 
                        type={"select"} 
                        options={["Mon, Wed, Fri","Tue, Thu"]} 
                        onChange={handleChange}
                        inputName={"schedule"}
                        value={formData.schedule}
                        placeholder={"Select Schedule"}
                        error={errors.schedule}
                    />
                </InputContainer>
            </div>   
            <div className="grid grid-cols-2 gap-4">
                <InputContainer icon={Clock3} inputName={"time"} label={"Time"}>
                    <InputElement 
                        type={"select"} 
                        options={["09:00 - 10:30","11:00 - 12:30","14:00 - 16:00","18:00 - 19:30"]} 
                        onChange={handleChange}
                        inputName={"time"}
                        value={formData.time}
                        placeholder={"Select Time"}
                        error={errors.time}
                    />
                </InputContainer>  
                <InputContainer inputName={"capacity"} icon={User} label={"Capacity"}>
                    <InputElement
                        placeholder={"Capacity"}
                        value={formData.capacity}
                        onChange={handleChange}
                        inputName={"capacity"}
                        type={"number"}
                        error={errors.capacity}
                    />
                </InputContainer>
            </div>    
            <div className="grid grid-cols-2 gap-4">
                <InputContainer inputName={"price"} icon={DollarSignIcon} label={"Price"}>
                    <InputElement
                        placeholder={"Price"}
                        value={formData.price}
                        onChange={handleChange}
                        inputName={"price"}
                        type={"number"}
                        error={errors.price}
                    />
                </InputContainer>
                <InputContainer inputName={"startDate"} icon={CalendarDays} label={"Start Date"}>
                    <InputElement
                        placeholder={"Start Date"}
                        value={formData.startDate}
                        onChange={handleChange}
                        inputName={"startDate"}
                        type={"date"}
                        error={errors.startDate}
                    />
                </InputContainer>
            </div>
            <div className="flex gap-3 flex-wrap items-center justify-end pt-4">
              <button type="button" onClick={() => setIsOpen(false)} className="p-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" className="p-2 bg-amber-500 border border-amber-500 text-white rounded-md hover:bg-amber-600">
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePopUp;
